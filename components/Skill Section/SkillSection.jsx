import React from 'react'
import SkillshowSec from './SkillshowSec'

function SkillSection() {
    return (
        <>
            <div className='maincolor md:h-screen h-full'>
                <div className='w-full h-full container mx-auto py-10'>
                    <h1 className='text-5xl text-white text-center'>My Skills</h1>
                    <div className='w-full h-2 bg-cyan-400 rounded-full'>

                    </div>
                    <div className='mt-10 px-10 md:px-0'>
                        <div className='md:flex justify-between'>
                            
                            <SkillshowSec 
                            img="html_image.png" 
                            title="HTML" 
                            subtitle="As a front-end developer, I have in-depth knowledge of HTML and its various elements, attributes, and semantic markup, which helps me to create highly structured and accessible web pages." 
                            persent="" />

                            <SkillshowSec 
                            img="css_img.png" 
                            title="CSS" 
                            subtitle="As a front-end developer, I have in-depth knowledge of CSS (Cascading Style Sheets) and its various properties, selectors, and units, which allows me to create visually appealing and responsive designs for web pages and other online content." 
                            persent="" />

                            <SkillshowSec 
                            img="javascript__img.png" 
                            title="JAVASCRIPT" 
                            subtitle="I have in-depth knowledge of JavaScript and its various features which enables me to create dynamic and interactive web pages and applications. I am also familiar implementation in real-world projects." 
                            persent="" />

                        </div>
                    </div>
                    <div className='mt-10 px-10 md:px-0'>
                        <div className='md:flex justify-between'>

                            <SkillshowSec 
                            img="react_image.png" 
                            title="REACT/NEXT.JS"
                            subtitle="I have in-depth knowledge of React and Next.js, two powerful JavaScript libraries used for building dynamic and high-performance web applications. I am skilled in creating reusable and modular components, managing state and props, and implementing client-side routing and server-side rendering using Next.js. This expertise allows me to create complex and interactive user interfaces that are optimized for speed, scalability, and maintainability." 
                            persent="" />

                            <SkillshowSec 
                            img="tailwind_image.png" 
                            title="TAILWIND CSS" 
                            subtitle=" I have in-depth knowledge of Tailwind CSS, a popular utility-first CSS framework that streamlines the design and development of responsive and mobile-friendly web interfaces. I am familiar with its extensive set of pre-defined classes, which enable me to rapidly prototype and style UI elements, without the need for custom CSS. Additionally, I am proficient in customizing and extending Tailwind's configuration, as well as integrating it with other front-end technologies like React and Next.js." 
                            persent="" />

                            <SkillshowSec 
                            img="responsive_image.png" 
                            title="RESPONSIVE DESIGN" 
                            subtitle="I have in-depth knowledge of responsive web design, a technique used to create web pages that adapt to different screen sizes and devices. I understand the principles of fluid grids, flexible images, and media queries, which are key components of responsive design, and I am skilled in implementing them using CSS frameworks like Bootstrap and Flexbox. I am also proficient in testing and debugging responsive layouts, and ensuring that they perform optimally across various browsers and devices." 
                            persent="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillSection