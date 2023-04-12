import React from "react";
import { Link } from "react-router-dom";
import bgDesk from "../starter-code/assets/home/background-home-desktop.jpg"


export default function Home() {
    return (
        <>
            <section className="home text-white bg-no-repeat bg-cover overflow-hidden h-screen px-6 flex items-center justify-center flex-col lg:flex-row lg:justify-evenly"
                style={{
                    backgroundImage: `url(${bgDesk})`
                }}
            >
                <div className="mt-56 lg:w-80 text-center lg:text-left font-body">
                    <h3 className="text-xl ">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className="text-8xl my-7">SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div>
                    <Link to='/destination'>
                        <button className="h-52 w-52 rounded-full bg-white text-black mt-8 ">
                            EXPLORE
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}