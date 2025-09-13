import { FaAppStore } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const servicesData = [
    {
      title: "App Design",
      description:
       "I am provides high-quality app designing services focused on user-friendly, visually appealing, and responsive interfaces. His expertise ensures a seamless user experience.",
    },
    {
      title: "Responsive Design",
      description:
        " project files related to responsive web design. It includes CSS media queries, Tailwind CSS components, flexible grid layouts, and mobile-friendly navigation systems to ensure seamless adaptation across different screen sizes. Additionally, it houses optimized images, performance enhancement scripts, and cross-browser compatibility tests to improve user experience. ",
    },
    {
      title: "Custom Website Development",
      description:
        " Creating fully responsive and dynamic websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS tailored to client needs. ",
    },
    {
      title: "Portfolio & Business Websites",
      description:
        " Developing professional websites for individuals, startups, and businesses to showcase their work, services, and achievements. ",
    },
    {
      title: "Website Maintenance & Optimization",
      description:
        "  Providing ongoing support, fixing bugs, improving website speed, and optimizing performance for better user experience. ",
    },
    {
      title: "E-commerce Development ",
      description:
        "Building online stores with seamless product listings, shopping carts, and secure payment gateways to enhance customer experience.I have created many projects",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id="services" className="text-white py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center "
      >
        <h2 className="text-3xl md--4xl font-bold underline mb-8">Services</h2>
        <p className="mb-12 text-gray-400">
          Ali Raza offers professional web development services, including:
          Custom Website Development using HTML, CSS, and JavaScript React.js
          Development for dynamic and interactive web applications Responsive UI
          Design with Tailwind CSS for modern and sleek layouts Frontend
          Optimization for fast and smooth user experiences Component-Based
          Development for scalable and maintainable code
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 duration-300 "
            >
              <FaAppStore className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
