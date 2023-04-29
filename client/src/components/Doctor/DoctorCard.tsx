import Image from 'next/image';
import Link from 'next/link';
//degree icon from react-icons
import { FaGraduationCap } from 'react-icons/fa';

interface DoctorCardProps {
  name: string;
  speciality: string;
  degree: string;
  yearOfExperience: string;
  dpScore: string;
  npv: string;
  consultationFee: string;
  days: string;
  time: string;
  location: string;
  address: string;
  city: string;
  description: string;
  imageLink: string;
  profileLink: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  speciality,
  degree,
  yearOfExperience,
  dpScore,
  npv,
  consultationFee,
  days,
  time,
  location,
  address,
  city,
  description,
  imageLink,
  profileLink,
}) => {
  
  return (
    <div className="shadow-lg rounded-2xl p-2  bg-white w-full border border-gray-400">
      <div className="w-full h-full text-center">
        <Image
          src={imageLink && imageLink}
          alt={name}
          width={130}
          height={130}
          className="rounded-full mx-auto"
        />
        <h1 className="text-xl font-medium mt-2 text-indigo-700 ">{name}</h1>
        <p className="text-gray-800 font-medium">{speciality}</p>
        <div className="flex items-center justify-center mt-4">
          {/* <span className="text-yellow-400">{dpScore}</span>
          <span className="text-gray-400"> ({npv})</span> */}
        </div>
        {/* <div className="flex items-center justify-center mt-4">
          <span className="text-gray-800">{yearOfExperience}</span>
        </div> */}
        <div className="flex items-center justify-center mt-1">
          <span className="text-green-500 font-semibold text-xl">{consultationFee}</span>
        </div>
        <hr className="mt-3" />
        <div className="mt-4 bg-gray-200 rounded-md p-2">
          <p className="text-gray-800"><span className='font-semibold'>Days and Time:</span> {days} | {time}</p>
          {/* <p className="text-gray-800">{location}</p> */}
          <p className="text-gray-800"><span className='font-semibold'>Address:</span> {address.substring(0,50)}</p>
        </div>
        <hr className="mt-2" />
        <div className="mt-2">
          <h2 className="text-lg font-medium text-gray-800 flex justify-center align-middle items-center">
            <FaGraduationCap className='text-indigo-800 text-center mr-3' /><span >{degree.substring(0,30)}...</span>
        </h2>
          {/* <p className="text-gray-700">{description.substring(0, 50)}</p> */}
        </div>
        <div className='m-5 min-w-full '>
        <Link href={profileLink} className='bg-indigo-800 hover:bg-indigo-700  text-white rounded-sm font-semibold p-3'>
            Book Apointment
        </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
