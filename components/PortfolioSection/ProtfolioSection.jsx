import Link from 'next/link'
import React from 'react'

function ProtfolioSection() {
    return (
        <>
            <div className='maincolor md:h-screen h-full flex items-end overflow-hidden'>
                <div className='w-full h-full container mx-auto py-10'>
                    <h1 className='text-5xl text-white text-center mt-10'>Portfolio</h1>
                    <div className='w-full h-2 bg-cyan-400 rounded-full z-50'>

                    </div>
                    <div className='h-[98%] w-full flex items-center'>
                        <div className=' h-[60%] w-full md:flex mt-10 md:mt-0'>
                            <div className='w-full h-full'>
                                <div className='w-full h-1/2 md:p-2 p-4 overflow-hidden'>
                                    <a href="https://cafechino-nextjs.vercel.app/" target="_blank">
                                        <img src="portfolio_image\cafeccino.png" alt="" />
                                    </a>

                                </div>
                                <div className='w-full h-1/2  md:p-2 p-4 overflow-hidden'>
                                    <a href="https://photographer-portfolio-website.vercel.app/" target="_blank">
                                        <img src="portfolio_image\projectTwo.png" alt="" />
                                    </a>

                                </div>
                            </div>
                            <div className='w-full h-full'>
                                <div className='w-full h-full md:pt-2 tp-4 overflow-hidden'>
                                    <a href="https://facebook-clone-git-main-pravasthedeveloper.vercel.app/" target="_blank">
                                        <img src="portfolio_image\projectThree.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='w-full h-full ml-2'>
                                <div className='w-full h-full md:pt-2 tp-4 overflow-hidden'>
                                    <a href="https://whats-app-ui-git-main-pravasthedeveloper.vercel.app/" target="_blank">
                                        <img src="portfolio_image\projectSix.png" alt="" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='maincolor pb-10 flex justify-center'>
                <button className='bg-cyan-400 px-10 py-3 rounded-lg'>
                    <Link href="/portfolio">SEE ALL</Link>
                </button>
            </div>
        </>
    )
}

export default ProtfolioSection