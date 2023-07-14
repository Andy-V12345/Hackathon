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
          <DetailBox />
          <DetailBox />
          <DetailBox />
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