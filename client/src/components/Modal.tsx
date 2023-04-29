import React, { useEffect, useState } from "react";
import sadFace from '../assets/sad_face.png';
import happyFace from '../assets/happy.png';
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { parseCookies } from "nookies";

type ModalProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
  }

export default function Modal({showModal, setShowModal, text} : ModalProps) {
//   const [showModal, setShowModal] = useState(false);
const [ find, setFind ] = useState(false)

const [ desc, setDesc ] = useState("");
const [ emoji, setEmoji ] = useState("");
const cookies = parseCookies();
  const city = cookies.city;
  const location = cookies.location;

const router = useRouter()

const handleFind = () => {
  setShowModal(false)
  // setFind(true)
}

useEffect(() => {
if(text === 'You are safe from Heart Disease!') {
    setDesc('In addition to healthy eating and regular exercise, maintaining a healthy lifestyle also involves getting enough sleep, managing stress levels, and avoiding harmful habits such as smoking and excessive alcohol consumption. It is also important to stay up-to-date with regular medical checkups and screenings to catch any potential health issues early on. By taking care of your physical, mental, and emotional well-being, you can improve your overall quality of life and reduce the risk of developing chronic diseases.  ')
    setEmoji('😊')
} else {
    setDesc('You need to consult doctors for further treatment. It is important to seek medical advice from a qualified healthcare professional for proper diagnosis and treatment of any health condition. Only a trained medical professional can provide a thorough evaluation, accurate diagnosis, and appropriate treatment plan based on your individual health history, symptoms, and test results. Ignoring or delaying seeking medical attention can lead to worsening of the condition and even irreversible damage to your health. Therefore, it is always advisable to consult with a doctor for any health concerns or symptoms that you may be experiencing')
    setEmoji('😔')
}
}, [text])

  return (
    <>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Our Prediction
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-900 text-4xl leading-relaxed font-medium flex items-center">
                    <span className="mr-4">{text}</span> {emoji === '😊' ? <Image src={happyFace} alt="Happy Face" width={50} height={20} /> : <Image src={sadFace} alt="Sad Face" width={50} height={20} />}
                   
                  </p>
                  <p className="text-md">
    
                        {desc}
                    
                  </p>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleFind()}
                  >
                    Close
                  </button>
                  {text !== 'You are safe from Heart Disease!' && 
                  (<button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Link href={`/doctors-near?speciality=Cardiologist&city=${city}`}>Find Cardiologists near you</Link>
                  </button>)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
          
        </>
      ) : null}
    </>
  );
}