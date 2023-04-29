import Head from 'next/head'
import { useState } from 'react'
import { BreastCancerForm, DiabetesForm, HeartDiseaseForm } from '../../components'
import { DashLayout } from '../../layouts'
import { parseCookies } from 'nookies';
import { doctors } from '../../data/doc_data'



const Predict = () => {
  const cookies = parseCookies();
  const city = cookies.city;
  const location = cookies.location;

  console.log(city, location);

  const [disease, setDisease] = useState('Heart Disease')

  return (
    <div className='bg-indigo-100'>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div className=''>
          {/* select disease */}
          <div className=''>
            <select
              className='bg-indigo-800 text-white focus:outline px-4 py-3 rounded-lg ml-10 font-semibold mt-3'
              name=''
              id=''
              value={disease}
              onChange={(e) => { setDisease(e.target.value) }}
            >
              <option value='Diabetes'>Diabetes Prediction</option>
              {/* <option value='Breast Cancer'>Breast Cancer Prediction</option> */}
              <option value='Heart Disease'>Heart Disease Prediction</option>
            </select>

            <div className='rounded-l-3xl'>
              {disease === 'Diabetes' ? <DiabetesForm /> :
                disease === 'Breast Cancer' ? <BreastCancerForm /> :
                  disease === 'Heart Disease' ? <HeartDiseaseForm /> : null}
            </div>
          </div>
        </div>
      </DashLayout>
    </div>
  )
}

export default Predict
