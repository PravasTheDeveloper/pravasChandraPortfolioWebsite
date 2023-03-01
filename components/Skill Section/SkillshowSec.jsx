import React from 'react'

function SkillshowSec({img, title, subtitle, persent}) {
    return (
        <>
            <div className='mb-10 md:w-[400px] w-full bg-slate-600 p-7 flex flex-col justify-center items-center rounded-lg'>
                <div className='w-[100px] h-[100px] bg-white p-5 rounded-full flex justify-center items-center'>
                    <img src={`skill_images/${img}`} className="w-full" />
                </div>
                <h1 className='text-white text-xl my-5 text-center'>{title}</h1>
                <span className='flex items-end'><p className='text-center text-white texts font-light h-[125px] overflow-hidden'>{subtitle}</p><p className='mb-1 text-white text-lg'>...</p></span>
                
            </div>

        </>
    )
}

export default SkillshowSec