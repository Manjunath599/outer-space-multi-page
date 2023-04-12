import React, { useState } from "react";
import data from './data'
import bgTech from "../starter-code/assets/technology/background-technology-desktop.jpg"

export default function Technology() {
  const [techie, setTechie] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = techie[value]
  return (
    <section className="text-white font-body bg-no-repeat bg-cover h-[66rem] md:h-screen  overflow-hidden  text-center px-6 lg:text-left"
      style={{
        backgroundImage: `url(${bgTech})`
      }}
    >
      <div className="my-20">
        <h2 className="text-2xl lg:ml-28 mt-24"><span>03</span> SPACE LAUNCH 101</h2>
      </div>
      <div>
        <img className="px-0 md:ml-36 lg:absolute lg:right-48 lg:bottom-16 lg:w-[25rem]" src={images.portrait} alt={name} />
      </div>
      <div className="lg:mt-44">
        <div className="my-8 lg:flex lg:flex-col lg:absolute mx-20">
          {techie.map((item, index) => {
            return <button className={`border border-white rounded-[45px] px-3 py-2 my-3 mx-3  ${index === value && 'bg-white text-black'}`} key={index} onClick={() => setValue(index)} >{index + 1}</button>
          })}
        </div>
        <h2 className="uppercase text-xl  lg:ml-52 ">The terminology...</h2>
        <h1 className="my-6 text-4xl font-semibold uppercase lg:ml-52 ">{name}</h1>
        <p className="lg:ml-52  lg:w-[30%]">{description}</p>
      </div>
    </section>
  )
}