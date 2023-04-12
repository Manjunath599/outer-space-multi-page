import React, { useState } from "react";
import data from './data'
import bgDest from "../starter-code/assets/destination/background-destination-desktop.jpg"

export default function Destination() {
  const [planets, setPlanets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]
  return (
    <section className="text-white font-body bg-no-repeat overflow-hidden overflow-x-hidden bg-cover h-[66rem] md:h-screen  pt-24 px-7 text-center lg:flex lg:text-left"
      style={{
        backgroundImage: `url(${bgDest})`
      }}
    >
      <div>
        <h2 className="lg:ml-28"><span>01</span> PICK YOUR DESTINATION</h2>
        <img className="mt-8 w-8/12 h-1/2 ml-14 md:ml-28 lg:w-auto lg:h-auto" src={images.png} alt={name} />
      </div>
      <div className="lg:ml-48 lg:mt-10 lg:w-1/3">
        <div className="my-7">
          {planets.map((item, index) => {
            return <button className={`mx-4 uppercase ${index === value && 'border-b-4 border-white pb-3'} `} key={index} onClick={() => setValue(index)} >{item.name}</button>
          })}
        </div>
        <h1 className="text-8xl font- font-semibold uppercase">{name}</h1>
        <p className="my-7">
          {description}
        </p>
        <hr className="my-7" />
        <div>
          <span >AVG. DISTANCE</span>
          <h2 className="my-3 text-xl">{distance}</h2>
        </div>
        <div >
          <span className="mt-10">EST. TRAVEL TIME</span>
          <h2 className="mt-3 text-xl">{travel}</h2>
        </div>
      </div>
    </section>
  )
}