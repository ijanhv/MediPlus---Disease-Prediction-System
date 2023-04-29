import Image from 'next/image';

type CardProps = {
    imageSrc: any;
    imageAlt: string;
    title: string;
    description: string;
  }

const Card = ({ imageSrc, imageAlt, title, description } : CardProps) => {
  return (
    <div className="w-full mx-6 mb-8 ">
      <div className=" rounded-lg shadow-md overflow-hidden sm:mx-4 mx-2">
        <div className="relative h-30 bg-blue-200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={200}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-black mb-2">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
