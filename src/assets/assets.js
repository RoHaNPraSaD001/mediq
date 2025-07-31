import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc 1.png'
import doc2 from './doc 2.jpg'
import doc3 from './doc 3.png'
import doc4 from './doc 4.png'
import doc5 from './doc 5.png'
import doc6 from './doc 6.jpg'
import doc7 from './doc 7.jpg'
import doc8 from './doc 8.jpg'
import doc9 from './doc 9.jpg'
import doc10 from './doc 10.jpg'
import doc11 from './doc 11.jpg'
import doc12 from './doc 12.jpg'
import doc13 from './doc 13.jpg'
import doc14 from './doc 14.png'
import doc15 from './doc 15.png'

import Dermatologist from './Dermatologist.svg'

import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr Jyoti ',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS, MRCP, MRCGP, PG Diploma Diabetes and endocrinology | General Physician',
        experience: '9 Years ',
        about: 'Dr. Jyoti is a Musculoskeletal Rehabilitation Specialist,General Physician and Rehab & Physical Medicine Specialist in C.D.A, Patna and has an experience of 9 years in these fields. ',
        fees: 500,
        address: {
            line1: 'C.D.A, Awadh Radiance Pain Clinic, Number 24',
            line2: 'Landmark: Near Novel Elementary School, Patna'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr Alapati Jyotsana',
        image: doc2,
        speciality: 'Gynaecologist',
        degree: 'MBBS MS Obstetrics and Gynaecology',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care',
        fees:500,
        address: {
            line1: 'Apollo 24|7 Virtual Clinic - Telangana, Sandhya Elite',
            line2: 'Narsing, Nanakramguda Service Road, Financial District, Hyderabad – 500032'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Abhinav Kumar',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '14 Years',
        about: 'Clinically sound skin specialist and passionate and highly experienced dermatosurgeon with exceptional skills in Hair Transplantation.',
        fees: 500,
        address: {
            line1: 'House Number B-54, Ground Floor, People Cooperative Colony,',
            line2: 'Near Ganga Devi Mahila College and Medanta Hospital, Kankarbagh, Patna'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Revathy S',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD (Paediatrics)',
        experience: '4+ Years',
        about: 'Dr. Revathy S is a top Paediatrician at Apollo 24|7 Virtual Clinic - Kerala in Angamaly. Holding MBBS, MD (Paediatrics), Dr. Revathy S specializes in diagnosing and treating a wide range of Paediatrics conditions.',
        fees: 500,
        address: {
            line1: 'Apollo 24|7 Virtual Clinic - Kerala',
            line2: 'Angamaly, Kerala'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kumar Abhinav',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, MD - General Medicine, DM - Neurology',
        experience: '12 Years',
        about: 'Dr. Kumar Abhinav is a Neurologist in Dwarka, Delhi and has an experience of 12 years in this field. Dr. Kumar Abhinav practices at Namit Neuro Centre in Dwarka, Delhi and Doctors  Hub in Dwarka Sector 12, Delhi.',
        fees: 1000,
        address: {
            line1: 'Flat Number 49, Pink Apartment , Sector 18 B',
            line2: 'Behind Dwarka Market, Delhi'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Abhishek Shridhar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'DM - Neurology, MD - General Medicine, MBBS',
        experience: '13 Years',
        about: 'Dr. Abhishek Shridhar specialists in Neurology and has hands on experience with various Neurological disorders like Migraine, Epilepsy, Stroke Thrombolysis, Parkinsons, Alzheimer, Cervical Spondylosis and Low back ache, Neuropathies',
        fees: 1000,
        address: {
            line1: 'Number A-1/25',
            line2: 'Metro Pillar Number 630, Delhi'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Adnan Imam',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS,MD General Medicine',
        experience: '12+ Years',
        about: 'Dr Adnan Imam is a top General Physician/ Internal Medicine Specialist at Dr Shafique Memorial Clinic in Patna. Holding MBBS, MD General Medicine, Dr Adnan Imam specializes in diagnosing and treating a wide range of General Physician/ Internal Medicine conditions',
        fees: 500,
        address: {
            line1: 'Dr. Shafique Memorial Clinic, New Park Lodging',
            line2: 'Near Khetan Market, Sabzibazar, Bakarganj, Patna  800004'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Shyama Nivas',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD - Obstetrics & Gynaecology',
        experience: '21 Years',
        about: 'Dr. Shyama Nivas is a renowned Gynaecologist in Kankarbagh, Patna. She has had many happy patients in her 21 years of journey as a Gynaecologist.',
        fees: 500,
        address: {
            line1: 'Shrinivas Hospital, A/60, P C Colony Road',

            line2: 'Opp. Lohiya Park, Kankarbagh, Bankman Colony, Patna'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Sri Rupa',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD - Dermatology , Venereology & Leprosy',
        experience: '7 Years',
        about: 'Dr Sri Rupa is a age reversal clinic. By Dr. Sri Rupa, MD Dermatology (Gold Medalist). She has done her MBBS and MD from the most prestigious IMS, BHU Varanasi. She has bagged Gold Medal for her post graduation in Dermatology.',
        fees: 500,
        address: {
            line1: '209, 2nd Floor, J29W, Sunrise Sai Ozone Plaza, Bailey Road, RPS More, Bailey Road',
            line2: 'Near Sunrise Sai Ozone Plaza, Patna'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Dikpati Mukherjee',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD (Paed.)',
        experience: '12+ Years',
        about: 'Dr. Dikpati Mukherjee is a top Paediatrician at MCR SUPER SPECIALITY POLY CLINIC & PATHOLOGY in Kolkata. Holding MBBS, MD (Paed.), Dr. Dikpati Mukherjee specializes in diagnosing and treating a wide range of Paediatrics conditions.',
        fees: 800,
        address: {
            line1: 'MCR Super Speciality Poly Clinic & Pathology, 11A Sourin Roy Road',
            line2: 'Beside Ellora Cinema Hall, Behala Tram Depot, Kolkata 700034',

        }
    },
    {
        _id: 'doc11',
        name: 'Dr.Anil Kumar Jha',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, MD - General Medicine, DNB - Neurology',
        experience: '31 Years',
        about: 'Dr. Anil Kumar Jha, with 23 years of experience in Neurology, holds the position of Senior Consultant and HOD at BIG Apollo Spectra Hospital , Patna. A pioneer in stroke care in Bihar, he initiated the thrombolysis program and dedicated stroke care services. His expertise extends to botulinum toxin therapy for movement disorders, comprehensive epilepsy care, and a specialized headache clinic. Dr. Jha actively engages in academic activities, conducting Neurology seminars and meetings, and presenting at various forums. Notably, he initiated the DNB Neurology program in Bihar',
        fees: 750,
        address: {
            line1: 'Sheetla Mandir Road , Agam Kuan',
            line2: 'Near Sump House, Patna'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Hemant Kumar',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD - General Medicine, DM - Neurology',
        experience: '12 Years',
        about: 'MBBS, MD (Medicine), DM (Neurology - G B Pant & Maulana Azad Medical College, New Delhi). He has also done SR from AIIMS New Delhi and IGIMS Patna.',
        fees: 800,
        address: {
            line1: 'Kailash Puri, 90 Feet Road, Pillar Number 18,',
            line2: ' Opposite Shyam Hospital, Metro Pillar No 18, Patna'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Seema Singh',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD - Community Medicine',
        experience: '2 Years',
        about: 'MBBS (Hons and Gold Medalist), MD (Gold Medalist )',
        fees: 500,
        address: {
            line1: 'Number O/48, Sinha Doctors Colony',
            line2: 'Patna'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Asha Gavade',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, DNB - Obstetrics & Gynecology',
        experience: '20 Years',
        about: 'Dr. Asha Gavade is a Gynecologist in Magarpatta City, Pune and has an experience of 11 years in this field. She practices at Care Women Health Clinic in Magarpatta City, Pune. She completed MBBS from Jawaharlal Nehru Medical College, Wardha in 2006 and DNB (Obstetrics and Gynecology) from Sanjivani Nursing Home in 2011',
        fees: 600,
        address: {
            line1: 'Survey No. 201/16B, DP Road, , Behind Amanora Park Town',
            line2: ' Sade Satara Nali, Landmark: Near Kumar Picasso, Pune'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Shobhana Jha',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD - Dermatology , Venereology & Leprosy',

         experience: '15 Years',
        about: 'Dr. Shobhana Jha is a certified dermatologist in Patna who deals with all the dermatological issues of skin, hair and nail and also diagnosis & treatment of STDs (Sexually Transmitted Diseases) and Leprosy. She is a highly skilled skin specialist with wide experience in treating conditions like acne, melasma, hair fall, pigmentation, fungal infections, nail disorders, vitiligo (white patch disease), psoriasis and skin eczemas etc. She is also well experienced in Cosmetic dermatology, Aesthetic dermatology and all types of LASER surgeries.',
        fees: 800,
        address: {
            line1: 'G-62, P C Colony, Rajni Path,',
            line2: 'Opposite Savera Cancer Hospital, Patna'
        }
    },
    
]