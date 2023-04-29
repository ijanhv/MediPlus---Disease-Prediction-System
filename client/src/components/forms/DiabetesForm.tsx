import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form";
import DiabetesModal from "../DiabetesModal";

type DiabetesFormData = {
  pregnancies: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  Bmi: number;
  DiabetesPedigreeFunction: number;
  Age: number;
  
};

const DiabetesForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [ans, setAns] = useState("");
  const [result, setResult] = useState("");
  console.log(result)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DiabetesFormData>({});

  const [data, setData] = useState('')

  const submitData = async (data: DiabetesFormData) => {
    // event.preventDefault();
    console.log(data);
    try {
      const response = await fetch("http://localhost:8002/diabetes_prediction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const final = await response.json();
      console.log(final);
      setResult(final);
      setAns(final);
      setShowModal(true);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex'>
      <form onSubmit={handleSubmit(submitData)} className='p-10' action=''>
        <p className='text-left text-indigo-900 font-semibold text-4xl my-4'>Enter relevant data for Diabetes Prediction</p>
        <div className='md:grid md:grid-cols-2 grid-cols-1  gap-x-10 gap-y-5'>
          <div className='space-y-2'>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Number of Pregnancies</label>
              <input className='form-input' type='text' 
                placeholder="Enter Number of Pregnancies"
                {...register("pregnancies", { required: true })}

              />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Your current Glucose level</label>
              <input className='form-input' type="text" 
              placeholder="Enter Glucose"
                {...register("Glucose", { required: true })}
              />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Your current Blood Pressure</label>
              <input className='form-input' type="text" 
              placeholder="Enter Blood Pressure"
                {...register("BloodPressure", { required: true })}
              />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Skin Thickness</label>
              <input className='form-input' type="text"
              placeholder="Enter Skin Thickness"
              {...register("SkinThickness", { required: true })}
              />
            </div>

            
          </div>

          <div className='space-y-2'>
          <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Your current Insulin Level</label>
              <input className='form-input' type="text" 
              placeholder="Enter Insulin"
              {...register("Insulin", { required: true })}
              />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Your current Body Mass Index (BMI)
</label>
              <input className='form-input' type="text" 
              placeholder="Enter BMI"
              {...register("Bmi", { required: true })}
              />
            </div>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Diabetes Pedigree Function</label>
              <input className='form-input' type="text" 
              placeholder="Enter Diabetes Pedigree Function"
              {...register("DiabetesPedigreeFunction", { required: true })}
              />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Your current Age</label>
              <input className='form-input' type="text" 
              placeholder="Enter Age"
              {...register("Age", { required: true })}
              />
            </div>

          </div>
        </div>

        <button type='submit' className='bg-indigo-800 px-4 py-3 text-xl text-white font-semibold rounded-2xl mt-10 w-1/2'>
          Predict
        </button>
        {result && 
        <DiabetesModal setShowModal={setShowModal} showModal={showModal} 
        text={result}/>}
        <p className="text-5xl">{result}</p>

      </form>
      <div className="sm:w-1/3 w-full ">
        <h1 className="text-2xl font-semibold text-indigo-600 p-6">
          Description of the input values
        </h1>
        <div
          className="flex flex-col space-y-2"
          style={{ height: "500px", overflowY: "scroll" }}
        >
          <ul className="text-lg font-normal text-gray-500 p-6">
            <li>
              <span className="text-black font-semibold">Number of Pregnancies </span>:
              Number of times pregnant
            </li>
            <li>
            <span className="text-black font-semibold">Glucose Level: </span> The normal range for fasting blood glucose levels is typically between 70-99 mg/dL (3.9-5.5 mmol/L)
            </li>
            <li>
            <span className="text-black font-semibold">Blood Pressure</span>: The normal range for blood pressure is generally considered to be around 120/80 mmHg. The first number represents systolic pressure (pressure when the heart is contracting), and the second number represents diastolic pressure

            </li>
            <li>
            <span className="text-black font-semibold">Skin Thickness</span> The normal range for skin thickness is not typically measured in the context of diabetes diagnosis
            </li>
            <li>
            <span className="text-black font-semibold">Insulin:</span> The normal range for fasting insulin levels can vary depending on the laboratory, but it is generally considered to be between 2-25 uIU/mL (microinternational units per milliliter).
              per minute.
            </li>
            <li>
            <span className="text-black font-semibold">Body Mass Index: </span> The normal range for BMI is typically considered to be between 18.5 and 24.9 kg/m². BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters.
              hours.
            </li>
            <li>
            <span className="text-black font-semibold">Diabetes Predigree Function:</span> The Diabetes Pedigree Function (DPF) is a score that estimates the likelihood of having diabetes based on the family history of the disease. There is no specific normal range for the DPF
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DiabetesForm