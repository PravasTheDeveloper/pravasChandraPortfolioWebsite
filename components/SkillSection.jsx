import React from 'react'
import SkillshowSec from './SkillshowSec'

function SkillSection() {
  return (
    <>
        <div className='HomePageSection'>
            <div className='w-full h-full container mx-auto py-10'>
                <h1 className='text-5xl text-white text-center'>My Skills</h1>
                <div className='w-full h-2 bg-cyan-400 rounded-full'>

                </div>
                <div className='mt-10'>
                    <div className='flex justify-between'>
                        <SkillshowSec />
                        <SkillshowSec />
                        <SkillshowSec />
                    </div>
                </div>
                <div className='mt-10'>
                <div className='flex justify-between'>
                        <SkillshowSec />
                        <SkillshowSec />
                        <SkillshowSec />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillSection