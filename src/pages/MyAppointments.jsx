import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import dr_img from '../assets/dr_img.png'

const MyAppointments = () => {
    const { backendUrl, token } = useContext(AppContext);
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);
    const [payment, setPayment] = useState('');

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return `${dateArray[0]} ${months[Number(dateArray[1])] ?? ''} ${dateArray[2]}`;
    };

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
                headers: { token },
            });

            if (data && Array.isArray(data.appointments)) {
                setAppointments([...data.appointments].reverse());
            } else {
                setAppointments([]);
                toast.error('Invalid appointments data received from server.');
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`,
                { appointmentId },
                { headers: { token } }
            );

            if (data.success) {
                toast.success(data.message);
                getUserAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(`${backendUrl}/api/user/verifyRazorpay`,
                        response,
                        { headers: { token } }
                    );
                    if (data.success) {
                        navigate('/my-appointments');
                        getUserAppointments();
                    } else {
                        toast.error(data.message);
                    }
                } catch (error) {
                    console.error(error);
                    toast.error(error?.response?.data?.message || error.message);
                }
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/payment-razorpay`,
                { appointmentId },
                { headers: { token } }
            );
            if (data.success) {
                initPay(data.order);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        if (token) getUserAppointments();
    }, [token]);

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
            <div>
                {appointments.length === 0 ? (
                    <p className="mt-4 text-gray-500">No appointments found.</p>
                ) : (
                    appointments.map((item, index) => (
                        <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                            <div>
                                <img className='w-20 h-20 bg-[#EAEFFF]' src={dr_img} alt="" />
                            </div>
                            <div className='flex-1 text-sm text-[#5E5E5E]'>
                                <p className='text-[#262626] text-base font-semibold'>{item.docData.name}</p>
                                <p>{item.docData.speciality}</p>
                                
                                <p className=' mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
                            </div>
                            <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                                {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                                    <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                                        Pay Online
                                    </button>
                                )}
                                {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                    <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'>
                                        <img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" />
                                    </button>
                                )}
                                {!item.cancelled && item.payment && !item.isCompleted && (
                                    <button className='sm:min-w-48 py-2 border rounded text-[#696969]  bg-[#EAEFFF]'>Paid</button>
                                )}
                                {item.isCompleted && (
                                    <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
                                )}
                                {!item.cancelled && !item.isCompleted && (
                                    <button onClick={() => cancelAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                                        Cancel appointment
                                    </button>
                                )}
                                {item.cancelled && !item.isCompleted && (
                                    <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyAppointments;
