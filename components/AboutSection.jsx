import React from 'react'
import Typewriter from 'typewriter-effect';

function AboutSection() {
    return (
        <div className='maincolor h-full md:h-screen  p-5'>
            <div className='w-full h-full container mx-auto'>
                <div className='w-full h-full md:flex justify-between items-center'>
                    <div className='md:w-[600px] w-full md:h-[700px] border-[10px] rounded-3xl border-white text-white p-5'>
                        <Typewriter

                            options={{
                                strings: [

                                    `.main {<br/>
                                    display: flex;<br/>
                                    flex-direction: column;<br/>
                                    justify-content: space-between;<br/>
                                    align-items: center;<br/>
                                    padding: 6rem;<br/>
                                    min-height: 100vh;<br/>
                                  }<br/>
                                  
                                  .description {<br/>
                                    display: inherit;<br/>
                                    justify-content: inherit;<br/>
                                    align-items: inherit;<br/>
                                    font-size: 0.85rem;<br/>
                                    max-width: var(--max-width);<br/>
                                    width: 100%;<br/>
                                    z-index: 2;<br/>
                                    font-family: var(--font-mono);<br/>
                                  }<br/>
                                  <h1 className='text-3xl'>But in Tailwind Just<h1/><br/>
                                    className='flex flex-col justify-between items-center p-6 min-h-max'<br/>
                                    className='inherit justify-inherit font-light max-w-max w-full z-50'`

                                ],
                                autoStart: true,
                                loop: true,
                                delay: 10
                            }}
                        />
                    </div>
                    <div className='md:w-1/2 w-full mt-16 md:mt-0'>
                        <h1 className='text-3xl text-white font-semibold mb-10'>Front End <span className='text-cyan-400'>Nextjs and Tailwind</span> Developer</h1>
                        <p className='text-white '>
                            As a front-end developer based in Bangladesh, I specialize in creating responsive websites using Next.js and Tailwind CSS.
                            With my expertise in these technologies, I can design and develop fast, scalable, and visually appealing web applications.
                            I am familiar with the latest web design trends and best practices, including responsive design principles, accessibility standards, and cross-browser compatibility.
                            I have a deep understanding of the importance of creating websites that are accessible and user-friendly across all devices.
                            Whether you need a simple landing page or a complex web application, I can help you bring your ideas to life with my skills and experience.
                            I am passionate about creating exceptional user experiences and delivering high-quality web applications that exceed my clients' expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection