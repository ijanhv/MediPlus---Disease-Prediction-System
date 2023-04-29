import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div>
        <div className='flex flex-row space-x-10 border border-indigo-600 rounded-xl p-4 mx-4 my-3 '>
            <img src='https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop' alt='doctor'
            className='rounded-full items-center' width={150} height={150}  />
            <div className='flex flex-col align-middle'>
                <h1 className='text-2xl font-bold'>Dr. John Doe</h1>
                <h1 className='text-xl font-semibold'>MBBS, MD</h1>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>Hospitals</h1>
                <h1 className='text-xl font-semibold'>Apollo Hospital, Chennai</h1>
            </div>
        </div>
    </div>
  )
}

export default Card