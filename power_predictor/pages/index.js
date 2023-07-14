import { Inter } from 'next/font/google'

import { useState, useEffect } from 'react';

import styles from '../styles.module.css'
import DetailBox from '@/components/DetailBox';

import { motion } from "framer-motion"
import Image from 'next/image';


export default function Home() {

  

  return (
    <div>
      <div className={`h-screen overflow-hidden ${styles.Main}`}>
        <motion.h1 initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{type: "spring", bounce: 0.5, delay: 0, duration: 1}} className='text-white text-center text-8xl font-bold my-20'>
          Electric AI
        </motion.h1>
        <section className='mx-10 grid justify-items-center gap-20 grid-flow-col h-full'>
          <DetailBox title="About">
              This AI chatbot analyzes a variety of factors to recommend
              the best course of action to reduce carbon emissions, such as choosing the best location for EV chargers,
              optimizing renewable energy and allocation of resources.
          </DetailBox>
          <DetailBox title="Acceleration">
              Electric AI can be used to accelerate the adoption of sustainable
               energy initiatives. With its predictions, implementations of 
               sustainable energy initiatives can be optimized as best as possible, making it easier
               for companies, countries, and organizations to adopt these initiatives.
          </DetailBox>
          <DetailBox title="Applications">
              Electric AI can analyze weather patterns to predict when renewable energy generation will be at its peak, 
              use historic energy usage data to determine periods of time with the highest energy demands, and locate optimal locations
              for installations of sustainable energy services such as EV charging stations.
          </DetailBox>
        </section>
      </div>
      <div className={`h-screen overflow-hidden relative ${styles.MainDown}`}>
        <div className={`absolute w-full ${styles.ImageContainer}`}>
          <h1 className={`my-8 text-center text-white text-5xl font-bold`}>Predicted vs. Actual</h1>
          <div className='grid justify-items-center grid-flow-col '>
            <Image
              className={`mx-auto rounded-xl`} 
              src={"/model1_pred.png"}
              width={700}
              height={1000}
            />
            <Image 
              className={`mx-auto rounded-xl`}
              src={"/model2_pred.png"}
              width={700}
              height={1000}
            />
          </div>
          {/* <h1 className='text-center text-xl py-5 text-white font-semibold'>{`Predicted vs. Actual values`}</h1> */}
        </div>
      </div>
    </div>
  )
}