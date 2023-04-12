import React, { useState } from "react";
import data from './data'
import { BsCircle } from 'react-icons/bs'
import bgCrew from "../starter-code/assets/crew/background-crew-desktop.jpg"


export default function Crew() {
  const [people, setPeople] = useState(data.crew)
  const [value, setValue] = useState(0)

  const { name, images, role, bio } = people[value]
  return (
    <section className="text-white overflow-y-hidden overflow-x-hidden h-screen font-body bg-no-repeat bg-cover text-center px-6 lg:text-left"
      style={{
        backgroundImage: `url(${bgCrew})`
      }}
    >
      <div className="my-20 lg:ml-20">
        <h2 className="text-2xl "><span>02</span> MEET YOUR CREW</h2>
      </div>
      <div className="ml-32 md:ml-72 ">
        <img className="w-1/2 h-1/2 lg:absolute lg:right-48 lg:bottom-4 lg:w-auto lg:h-[70%]" src={images.png} alt={name} />
      </div>
      <div className="lg:mt-28 lg:ml-20">
        <div className="my-10 lg:absolute lg:bottom-20">
          {people.map((item, index) => {
            return <button className="w-6 h-6 mx-8 rounded-2xl" key={index} onClick={() => setValue(index)} ><BsCircle className={`${index === value && 'bg-gray-100 border-none rounded-lg'}`} /></button>
          })}
        </div>
        <h2 className="uppercase lg:mt-10">{role}</h2>
        <h1 className="mt-4 mb-6 text-4xl font-semibold uppercase">{name}</h1>
        <p className="md:px-32 lg:pl-0 lg:w-[40%] ">{bio}</p>
      </div>
    </section>
  )
}