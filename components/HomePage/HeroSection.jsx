import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function HeroSection() {

    return (
        <>
            <div className='container mx-auto h-5/6 flex items-center'>
                <div className='flex justify-between w-full'>
                    <div className='text-white md:w-1/2 w-full'>
                        <h3 className='md:text-3xl text-xl font-bold text-center md:text-left'>
                            Hello, It's Me
                        </h3>
                        <h1 className='md:text-5xl text-2xl font-semibold md:font-bold my-10 text-center md:text-left '>
                            Pravas Chandra Sarkar
                        </h1>
                        <div>

                        </div>
                        <h3 className='md:text-3xl font-bold mb-10 flex justify-center md:justify-start text-lg text-center'>
                            And I'm a <span className='text-cyan-400 ml-2 text-center'><Typewriter
                                options={{
                                    strings: ['Front-End Developer', 'React Developer', 'Next.js Developer', 'Tailwind Expert'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 60
                                }}
                            /></span>
                        </h3>
                        <p className='md:text-base text-sm font-light md:font-normal md:w-[500px] w-full px-5 md:px-0 text-center md:text-left'>
                            I am a front-end developer based in Bangladesh with expertise in Next.js and Tailwind CSS. I specialize in creating responsive and user-friendly web applications using these powerful technologies.
                        </p>
                        <div className='text-2xl flex mt-10 justify-center md:justify-start z-[100]'>
                            <div className='group'>
                                <div className='w-12 h-12 border-4 border-cyan-400 group-hover:border-white duration-500 flex justify-center items-center mr-7 rounded-full'>
                                    <a href="https://www.facebook.com/profile.php?id=100034474604538" target="_blank">
                                        <FaFacebookF className='text-cyan-400 group-hover:text-white' />
                                    </a>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='w-12 h-12 border-4 border-cyan-400 group-hover:border-white duration-500 flex justify-center items-center mr-7 rounded-full'>
                                    <a href="https://www.instagram.com/mith.un259/" target="_blank">
                                        <AiFillInstagram className='text-cyan-400 group-hover:text-white' />
                                    </a>
                                </div>
                            </div>
                            <div className='group'>
                                <div className='w-12 h-12 border-4 border-cyan-400 group-hover:border-white duration-500 flex justify-center items-center mr-7 rounded-full'>
                                    <a href="https://www.linkedin.com/in/pravas-chandra-39b466215/" target="_blank">
                                        <FaLinkedinIn className='text-cyan-400 group-hover:text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 md:text-left text-center'>
                            <button className='bg-cyan-400 p-5 py-3 rounded-md'><a href="\cv\pravas__chandra__resume.pdf" download="projectFour">Download CV</a></button>
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







