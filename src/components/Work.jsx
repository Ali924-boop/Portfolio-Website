import React from 'react'
import project1 from "../assets/Project1.png.png"
import project2 from "../assets/Project2.png.png"
import project3 from "../assets/Project3.png.png"
import {motion} from "motion/react"
import {InView, useInView} from 'react-intersection-observer'
import Companies from '../Companies'

const Work = () => {

  const projects = [
    {
      id: 1,
      title: "Ecommerce website",
      description: "Shop by Cara is an eCommerce website developed by Ali Raza as his first project. The frontend is built using HTML CSS and JavaScript, ensuring a responsive and user-friendly shopping experience. The website is designed to provide seamless navigation, an appealing interface and smooth functionality for online shoppers",
      Image: project1,
      link: "#"
    },
    {
      id: 2,
      title: "Car Rental website",
      description: "The AR Car Rental website is a modern and user-friendly platform designed for renting cars conveniently. It provides customers with a seamless experience to browse available vehicles, check pricing, and book rentals online. The website is built with a responsive design, ensuring smooth functionality across all devices.",
      Image: project2,
      link: "#"
    },
    {
      id: 3,
      title: "Spotify Clone website",
      description: "The Spotify Clone is a music streaming web application designed to provide users with a smooth and immersive listening experience. This project replicates the core features of Spotify, allowing users to explore, play, and manage their favorite music seamlessly.",
      Image: project3,
      link: "#"
    },
  ]

  const { ref, inView} = useInView({
              triggerOnce: true,
              threshold: 0.2,
          });
  return (
    <div id='work'
    className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={ inView ? {opacity:1, y:0} : {}}
        transition={{delay:0.3, duration:0.5}}
        className='text-4xl text-white underline font-bold text-center mb-12'>My Work</motion.h2>
        <motion.p
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={ inView ? {opacity:1, y:0} : {}}
        transition={{delay:0.3, duration:0.5}}
        className='mb-12 text-gray-400 text-center'> Shop by Cara is a modern e-commerce platform designed for a seamless shopping experience. Built with React.js and Tailwind CSS,
 I am also developed other e-commerce and web projects, ensuring scalability, performance, and a great user experience.
 </motion.p>
 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
  {
    projects.map((project) => (
      <motion.div
      ref={ref}
        initial={{opacity:0, y:50}}
        animate={ inView ? {opacity:1, y:0} : {}}
        transition={{delay: project.id * 0.2, duration:0.5}}
      key={project.id}
      className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
      >
        <img src={project.Image} className='w-full h-48 object-cover '/>
        <div className='p-6'>
          <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
          <p className='text-slate-400 mb-4'>{project.description}</p>
          <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>Details</button>
        </div>
      </motion.div>
    ))
  }
 </div>
      </div>
      <motion.div
      ref={ref}
      initial={{opacity:0, y:100}}
      animate={ InView ? {opacity:1, y:0} : {}}
      transition={{delay:0.7, duration:0.5}}
      >
      <Companies/>
      </motion.div>
    </div>
  );
} 

export default Work
