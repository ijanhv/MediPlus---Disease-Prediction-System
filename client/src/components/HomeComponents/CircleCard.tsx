import Image from 'next/image';
import heartImg from '../../assets/heart.png'

type CardProps = {
    imageSrc: any;
    imageAlt: string;
    title: string;
    description: string;
  }

const CircleCard = () => {
  return (
    <div className="w-2/3 mx-4 mb-10 ">
      <div className=" rounded-full shadow-md overflow-hidden sm:mx-4 mx-4">
        <div className="relative p-5 bg-indigo-200 justify-center items-center">
          <Image
            src={heartImg}
            alt="heart"
            width={200}
            height={200}
            
          />
        </div>
        
      </div>
    </div>
  );
};

export default CircleCard;
