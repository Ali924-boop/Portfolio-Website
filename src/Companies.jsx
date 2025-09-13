import React from 'react'
import {motion} from "motion/react"
import { animate } from 'motion';
const Companies = () => {

    const companies = [
        "Dev Natives",
        "Xeven Solution",
        "Linkedin",
        "Cas Lab",
        "AR Coding",
        "NetSol Technologies",
        "10Pearls",
        "Arbisoft",
        "Folio3",
    ];

    const companiesList = [...companies, ...companies];

    const scroollVariant1 = {
        animate: {
            x:  [0, -2000],
            transition: {
                x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
             },
            },
        },
    };

    const scroollVariant2 = {
        animate: {
            x:  [ -2000, 0],
            transition: {
                x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
             },
            },
        },
    };

  return (
    <div className='text-white py-16'>
      <div className='container mx-auto text-center '>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>Companies i have Worked With</h2>
        <div className='overflow-hidden relative w-full'>
            <motion.div
            variants={scroollVariant1}
            animate="animate"
            className='whitespace-nowrap flex space-x-10'>
                {companiesList.map((company, index) => (
                    <div
                    key={index}
                    className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                        {company}
                    </div>
                ))}
            </motion.div>
        </div>
        <div className='overflow-hidden relative w-full mt-5'>
        <motion.div
         variants={scroollVariant2}
            animate="animate"
        className='whitespace-nowrap flex space-x-10'>
        {companiesList.map((company, index) => (
                    <div
                    key={index}
                    className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                        {company}</div>
                ))} 
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Companies
