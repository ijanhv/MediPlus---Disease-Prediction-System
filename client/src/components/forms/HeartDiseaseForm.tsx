import React, { FormEvent, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "../Modal";

type HeartDiseaseFormData = {
  age: number;
  sex: string;
  cigsPerDay: number;
  BPMeds: string;
  prevalentStroke: string;
  prevalentHyp: string;
  diabetes: string;
  totChol: number;
  sysBP: number;
  BMI: number;
  heartRate: number;
  glucose: number;
};



const HeartDiseaseForm = () => {
  const [ans, setAns] = useState("");
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeartDiseaseFormData>({});

  const submitData = async (data: HeartDiseaseFormData) => {
    // event.preventDefault();
    console.log(ans);
    console.log(data);
    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const final = await response.json();
      if (final == 1) 
        setResult("You have a high chance of getting heart disease")
      if (final == 0)
        setResult("You have a low chance of getting heart disease")
        
      console.log(final);
      setAns(final);
      setShowModal(true);
      console.log(ans);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col ">
      <form onSubmit={handleSubmit(submitData)} className="p-10" action="">
        <p className="text-left text-indigo-900 font-semibold text-4xl my-4">
          Enter relevant data for Heart Disease
        </p>
        <div className="md:grid md:grid-cols-2 grid-cols-1  gap-x-10 gap-y-5">
          <div className="space-y-2">
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Age in number
              </label>
              <input
                className="form-input"
                placeholder="Enter Age"
                // name='age'
                // onChange={handleChange}
                {...register("age", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Sex (M or F)
              </label>
              <select
                className="form-input"
                // name='sex'
                // onChange={handleChange}
                {...register("sex", { required: true })}
              >
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                How many cigarettes do you smoke per day?
              </label>
              <input
                className="form-input"
                placeholder="Enter number of cigarettes"
                // name='cigarettesPerDay'
                // onChange={handleChange}
                {...register("cigsPerDay", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Are you currently on any Blood Pressure Meds? (Yes / No)
              </label>
              <select
                className="form-input"
                // name='bloodPressureMeds'
                // onChange={handleChange}
                {...register("BPMeds", { required: true })}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Did you have a prevalent stroke? (Yes / No)
              </label>
              <select
                className="form-input"
                placeholder="Enter your location"
                // name='prevalentStroke'
                // onChange={handleChange}
                {...register("prevalentStroke", { required: true })}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Do you have prevalent hypertension? (Yes / No)
              </label>
              <select
                className="form-input"
                // name='prevalentHypertension'
                // onChange={handleChange}
                {...register("prevalentHyp", { required: true })}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Do you have diabetes? (Yes / No)
              </label>
              <select
                className="form-input"
                // name='diabetes'
                // onChange={handleChange}
                {...register("diabetes", { required: true })}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your total cholestrol level
              </label>
              <input
                className="form-input"
                placeholder="Enter your cholestrol level"
                // name='totalCholestrol'
                // type='number'
                // onChange={handleChange}
                {...register("totChol", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your systolic blood pressure
              </label>
              <input
                className="form-input"
                placeholder="Enter your blood pressure"
                // name='systolicBloodPressure'
                // onChange={handleChange}
                {...register("sysBP", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your current Body Mass Index (BMI)
              </label>
              <input
                className="form-input"
                placeholder="Enter your BMI"
                // name='bmi'
                // onChange={handleChange}
                {...register("BMI", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your current heart rate
              </label>
              <input
                className="form-input"
                placeholder="Enter your current heart rate"
                // name='heartRate'
                // onChange={handleChange}
                {...register("heartRate", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="">
                Your current glucose level
              </label>
              <input
                className="form-input"
                placeholder="Enter your current glucose level"
                // name='glucose'
                // onChange={handleChange}
                {...register("glucose", { required: true })}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-indigo-800 px-4 py-3 text-xl text-white font-semibold rounded-2xl mt-10 w-1/2"
        >
          Predict
        </button>
        {result && 
        <Modal setShowModal={setShowModal} showModal={showModal} 
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
              <span className="text-black font-semibold">Number of cigarettes per day </span>: Non-smoker, light smoker (1-9
              cigarettes/day), moderate smoker (10-19 cigarettes/day), heavy
              smoker (20 or more cigarettes/day).
            </li>
            <li>
            <span className="text-black font-semibold">Blood Pressure: </span> Normal range for systolic blood pressure (SBP) is
              between 90-119 mmHg, and for diastolic blood pressure (DBP) is
              between 60-79 mmHg.
            </li>
            <li>
            <span className="text-black font-semibold">Total cholesterol level:</span> Normal range for total cholesterol is
              less than 200 mg/dL (milligrams per deciliter).
            </li>
            <li>
            <span className="text-black font-semibold">Body Mass Index (BMI):</span> Normal range for BMI is between 18.5-24.9
              kg/m² (kilograms per square meter).
            </li>
            <li>
            <span className="text-black font-semibold">Heart Rate:</span> Normal range for heart rate is between 60-100 beats
              per minute.
            </li>
            <li>
            <span className="text-black font-semibold">Glucose level: </span> Normal range for glucose level is between 70-99
              mg/dL (milligrams per deciliter) when fasting. After eating, it
              can rise up to 140 mg/dL but usually returns to normal within 2
              hours.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeartDiseaseForm;
