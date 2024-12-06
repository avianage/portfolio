import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='object-contain w-16 h-16'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>I'm a passionate Computer Engineering student dedicated to merging technology with creativity. I am proficient in <strong>Python, Machine Learning, Web Development</strong>, and <strong>Data Structures and Algorithms (DSA)</strong> in C++.</p> 
        <p>My skills include <strong>Git, GitHub, Docker, Linux</strong>, and I’ve built a <strong>homelab using Proxmox</strong> for server virtualization and for hosting personal projects.</p> 
        <p>I'm also highly interested in <strong>Blockchain, Virtual Reality (VR)</strong>, and <strong>Cloud Services</strong>.</p> 
        <p>I thrive on solving problems, crafting impactful solutions, and building intuitive applications.</p> <p>As a dedicated learner, I continuously explore new tools and methodologies to stay ahead. I’m eager to collaborate, gain hands-on experience, and grow further in this dynamic field.</p>
      
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
