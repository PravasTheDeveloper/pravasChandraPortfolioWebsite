import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function HeroSection() {
    return (
        <>
            <div className='container mx-auto h-5/6 flex items-center'>
                <div className='flex justify-between w-full'>
                    <div className='text-white md:w-1/2'>
                        <h3 className='text-3xl font-bold text-center md:text-left'>
                            Hello, It's Me
                        </h3>
                        <h1 className='text-5xl font-bold my-10 text-center md:text-left'>
                            Pravas Chandra Sarkar
                        </h1>
                        <h3 className='md:text-3xl font-bold mb-10 flex justify-center md:justify-start text-xl text-center'>
                            And I'm a <span className='text-cyan-400 ml-2 text-center'><Typewriter
                                options={{
                                    strings: ['Front-End Developer', 'React Developer','Next.js Developer','Tailwind Expert'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 60
                                }}
                            /></span>
                        </h3>
                        <p className='text-base md:w-[500px] w-[400px] text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ab
                            autem repellat reiciendis ipsam perspiciatis.
                        </p>
                        <div className='text-2xl flex mt-10 justify-center md:justify-start z-[50]'>
                            <div className='group'>
                                <div className='w-12 h-12 border-4 border-cyan-400 group-hover:border-white duration-500 flex justify-center items-center mr-7 rounded-full'>
                                    <FaFacebookF className='text-cyan-400 group-hover:text-white' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='w-12 h-12 border-4 border-cyan-400 group-hover:border-white duration-500 flex justify-center items-center mr-7 rounded-full'>
                                    <AiFillInstagram className='text-cyan-400 group-hover:text-white' />
                                </div>
                            </div>
                            <div className='group'>
                                <div className='w-12 h-12 border-4 border-cyan-400 group-hover:border-white duration-500 flex justify-center items-center mr-7 rounded-full'>
                                    <FaLinkedinIn className='text-cyan-400 group-hover:text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 md:text-left text-center'>
                            <button className='bg-cyan-400 p-5 py-3 rounded-md'>Download CV</button>
                        </div>
                    </div>
                    <div className='md:flex justify-end w-1/2 hidden'>
                        <img src="Hero__BG.png" alt="" className='w-[500px] h-[500px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection







