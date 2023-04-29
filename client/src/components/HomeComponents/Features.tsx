import { useState, useRef, useEffect, useMemo } from "react";
import { BsCheckCircle, BsPlayFill } from "react-icons/bs";
import { featureData } from '../../data/features_data'
import featureImg from '../../assets/featureImg.jpg'
import Image from "next/image";

const Features = () => {

  return (
    <section className="bg-[#f1fdf7] py-14 px-16">
      <div className="contain">
        <div className="flex lg:items-center flex-col items-start justify-start lg:flex-row lg:justify-between w-full gap-8 lg:gap-5">
          <div className="flex-1 flex items-start justify-start flex-col gap-5">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-darkColor">
            MediPlus, A Healthcare platform to <br /> 
            get you the best care
            </h2>
            <div className="w-full flex items-start justify-start flex-col gap-5">
              {featureData.map((item, i) => (
                <div
                  className="flex items-start justify-start w-full flex-col gap-3"
                  key={i}
                >
                  <div className="flex items-center justify-start gap-3">
                    <span className="text-darkColor">
                      <BsCheckCircle className="sm:w-6 sm:h-6 w-4 h-4" />
                    </span>
                    <h2 className="text-base sm:text-lg font-semibold text-darkColor">
                      {item.title}
                    </h2>
                  </div>
                  <p className="w-full lg:max-w-[450px] text-sm sm:text-base font-medium text-gray-500">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full relative" 
            // onClick={handleButtonClick}
            >
              <Image src={featureImg} alt="features_image" className="w-full rounded-md" />
              <span className="absolute top-0 w-full h-full flex items-center justify-center text-white">
                {/* <span className="bg-black/50 rounded-full flex items-center w-[60px] h-[60px] justify-center cursor-pointer">
                  <BsPlayFill size={59} />
                </span> */}
              </span>
            </div>
            {/* {showVideo && (
              <div className="fixed top-0 right-0 bg-[#00000085]  w-full h-full z-40 place-items-center flex justify-center items-center">
                <div
                  ref={videoRef}
                  className="lg:w-[986px] lg:h-[551px] h-[250px] rounded-2xl w-[90%] flex items-center justify-center"
                >
                  <video
                    className="rounded-md h-full w-full"
                    src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                    controls
                  ></video>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;