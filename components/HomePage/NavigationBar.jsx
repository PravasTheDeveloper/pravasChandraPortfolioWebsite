import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
function NavigationBar() {

    const [leftsideslider, setleftsideslider] = useState(false)
    

    return (
        <>
            <div className='py-5 px-5'>
                <div className='container mx-auto flex justify-between items-center text-white'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl md:px-0'>MITHUN <span className='text-cyan-400 text-6xl'>.</span></h1>
                    </div>
                    <div>
                        <ul className='md:flex hidden'>
                            <li className='ml-10 hover:text-cyan-400 duration-200 cursor-pointer' >Home</li>
                            <li className='ml-10 hover:text-cyan-400 duration-200 cursor-pointer ' >About</li>
                            <li className='ml-10 hover:text-cyan-400 duration-200 cursor-pointer ' >Skills</li>
                            <li className='ml-10 hover:text-cyan-400 duration-200 cursor-pointer ' >Portfolio</li>
                            <li className='ml-10 hover:text-cyan-400 duration-200 cursor-pointer ' >Contacts</li>
                        </ul>
                    </div>
                    <div className='duration-500 md:hidden'>
                        {
  
                            leftsideslider === true ? <RxCross2 className='text-4xl font-light duration-300' onClick={()=>{setleftsideslider(!leftsideslider)}} /> : <FaBars className='text-2xl font-light' onClick={()=>{setleftsideslider(!leftsideslider)}} />
                        }
                        
                    </div>
                </div>
                <div className={leftsideslider === true ? 'bg-[#0000] z-40 w-[90%] right-0 h-full absolute md:hidden' : 'bg-[#fff0] z-40 w-[90%] right-0 h-full absolute hidden'} onClick={() =>{setleftsideslider(false)}}>
                        
                </div>
                <div className={leftsideslider === true ? "md:hidden absolute bg-slate-700 w-[80%] h-full left-0 top-0 z-50 duration-500": " md:hidden absolute bg-slate-700 w-[80%] h-full left-[-1000px] top-0 z-50  duration-300" }>
                    <ul className='flex flex-col items-center justify-center h-full w-full text-white'>
                        <li className='text-xl mt-10  hover:text-cyan-400 duration-200 cursor-pointer' >Home</li>
                        <li className='text-xl mt-10  hover:text-cyan-400 duration-200 cursor-pointer ' >About</li>
                        <li className='text-xl mt-10  hover:text-cyan-400 duration-200 cursor-pointer ' >Skills</li>
                        <li className='text-xl mt-10  hover:text-cyan-400 duration-200 cursor-pointer ' >Portfolio</li>
                        <li className='text-xl mt-10  hover:text-cyan-400 duration-200 cursor-pointer ' >Contacts</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavigationBar
