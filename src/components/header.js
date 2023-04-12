import React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import logo from "../starter-code/assets/shared/logo.svg"
import menu from "../starter-code/assets/icon-menu.svg"
import menuClose from "../starter-code/assets/icon-menu-close.svg"


export default function Header() {
   const [moveSidebar, setMoveSidebar] = useState(false)

   return (
      <>
         <header className="overflow-x-hidden">
            <div>
               <Link to='/'><img className="absolute top-4 left-3" src={logo} alt='logo' /></Link>
            </div>
            <div className={`text-white font-body h-full  ml-8 w-8/12 absolute 
            ${moveSidebar ? `right-0` : `-right-[36rem] md:-right-[45rem]`} lg:mt-16 lg:w-1/2 lg:right-8  lg:-top-10 lg:h-auto`}
               style={{
                  backgroundColor: `rgba(255, 255, 255, 0.04)`,
                  backdropFilter: `blur(40.7742px)`
               }}
            >
               <nav>
                  <ul onClick={() => setMoveSidebar(!moveSidebar)} className=" flex flex-col mt-60 ml-10 lg:flex-row lg:mt-auto">
                     <li className="lg:hidden absolute right-4 top-4 cursor-pointer bg-white"><img className="" src={menuClose} /></li>
                     <li className="my-4 lg:mx-6"><Link to='/'><span className={'mx-2'} >00</span>Home</Link></li>
                     <li className="my-4 lg:mx-6"><Link to='/destination'><span className={'mx-2'} >01</span>Destination</Link></li>
                     <li className="my-4 lg:mx-6"><Link to='/crew'><span className={'mx-2'} >02</span>Crew</Link></li>
                     <li className="my-4 lg:mx-6"><Link to='/technology'><span className={'mx-2'} >03</span>Technology</Link></li>
                  </ul>
               </nav>
            </div>

            <div className="lg:hidden absolute right-6 top-8 bg-white"  >
               {!moveSidebar && <button  onClick={() => setMoveSidebar(!moveSidebar)} ><img src={menu}/></button>}
            </div>
         </header>
      </>
   )
}
