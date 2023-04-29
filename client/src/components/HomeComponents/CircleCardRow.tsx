import React from 'react'
import CircleCard from './CircleCard'

const CircleCardRow = () => {
  return (
    <div className="flex-wrap mx-10 grid grid-cols-3 sm:grid-cols-5 justify-evenly items-center ">
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
    </div>
  )
}

export default CircleCardRow