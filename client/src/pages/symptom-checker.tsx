import React, { useState } from 'react'
import { DashLayout } from '../layouts'
import Image from 'next/image'

const SymptomChecker = () => {
  const [other, setOther] = useState('')
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<Message>()
  
  let input = `I have ${selectedSymptoms.toString()}, which sickness can i have?`

  const symptoms: string[] = [
    'Fever',
    'Cough',
    'Sore throat',
    'Shortness of breath',
    'Fatigue',
    'Body aches',
    'Headache',
    'Loss of taste or smell',
    'Nausea or vomiting',
    'Diarrhea',
    'Runny or stuffy nose',
    'Muscle pain',
    'Difficulty breathing',
    'Chest pain',
    'Confusion',
    'Bluish lips or face',
    'Rash',
    'Swollen lymph nodes',
    'Abdominal pain',
    // chicken pox symptoms
    'Blister',
    'Ulcer',
    'Itching',
    'Red Spots'
  ]

  const handleSymptomClick = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
      console.log(selectedSymptoms)
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
      console.log(selectedSymptoms)
    }
  }

  const fetchData = async () => {

    setLoading(true)

    const response = await fetch('/api/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input
      })
    })
    const data = await response.json()
    console.log(data)
    setLoading(false)

    if (data.text) {
      const botMessage = {
        text: data.text,
        key: Date.now(),
        msgByBot: true
      }
      setResponse(botMessage)
      console.log(botMessage)
    } else {
      console.log('Error occured')
    }
  }


  const handleOtherSymptomSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    if (other.trim() !== '') {
      setSelectedSymptoms([...selectedSymptoms, other.trim()])
      setOther('')
    }
  }

  return (
    <DashLayout>
      <div className='m-10'>
        {
          loading && (
            <Image height={250} width={250} alt='loading-gif' className='absolute z-30 top-60 left-1/2' src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e473pkmwsz2slnc43xtrldzuo6qo9z75p56n2zfpzlz&rid=giphy.gif&ct=g' />
          )
        }
        <h1 className='text-5xl font-semibold '>Select your Symptoms</h1>
        <div className='mt-6'>
          {symptoms.map((symptom, i) => (
            <span
              key={i}
              id='badge-dismiss-default'
              className={`inline-flex cursor-pointer items-center px-3 py-2 m-2 text-sm font-medium ${selectedSymptoms.includes(symptom)
                ? 'text-white bg-indigo-500'
                : 'text-indigo-700 bg-indigo-200'
                } rounded-lg`}
              onClick={() => handleSymptomClick(symptom)}
            >
              {symptom}
            </span>
          ))}

          <form onSubmit={handleOtherSymptomSubmit}>
            <input
              type='text'
              className='items-center px-3 py-2 m-2 text-sm font-medium text-indigo-700 bg-indigo-200 rounded-lg'
              placeholder='Other Symptoms'
              value={other}
              onChange={(e) => {
                setOther(e.target.value)
              }}
            />
            <button
              className='px-3 py-2 m-2 text-sm font-medium text-white bg-indigo-700 rounded-lg'
              type='submit'
            >
              Add
            </button>
          </form>
        </div>
        <hr className='mt-10' />
        <h1 className='text-5xl mt-10 font-medium'>Selected Symptoms</h1>
        {selectedSymptoms.length >= 3 && <button onClick={() => fetchData()} className='w-1/6 bg-indigo-500 my-5 font-semibold text-white rounded-full p-2'>Search for Symptoms</button>}
        <div className='mt-6'>
          {selectedSymptoms.map((symptom, i) => (
            <span
              key={i}
              id='badge-dismiss-default'
              className='inline-flex items-center px-3 py-2 m-2 text-sm font-medium text-white bg-indigo-700 rounded-lg'
            >
              {symptom}
              <button
                onClick={() => handleSymptomClick(symptom)}
                type='button'
                className='inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-full hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300'
                data-dismiss-target='#badge-dismiss-default'
                aria-label='Remove'
              >
                <svg
                  aria-hidden='true'
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </span>
          ))}
        </div>
        {response && selectedSymptoms.length >= 3 && (
          <div className='h-40 p-3 my-5 bg-gray-300 rounded-lg'>
            <p className='text-lg font-semibold'>{response.text.text}</p>
          </div>
        )}
      </div>
    </DashLayout>
  )
}

export default SymptomChecker