import { Inter } from 'next/font/google'

import { useState, useEffect } from 'react';

import styles from '../styles.module.css'
import DetailBox from '@/components/DetailBox';

import { motion } from "framer-motion"


export default function Home() {

  // const [noteJson, setJson] = useState(() => null)

  // useEffect(() => {
  //   fetch("./BenchmarkNotebook.ipynb")
  //     .then((response) => setJson(response.json()))
  //     .then(console.log(noteJson))
  // }, [])
  

  return (
    <div className={`h-screen overflow-hidden ${styles.Main}`}>
      <motion.h1 initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} transition={{type: "spring", bounce: 0.5, delay: 0, duration: 1}} className='text-white text-center text-8xl font-bold my-20'>Electricity Predictor</motion.h1>
      <section className='mx-10 grid justify-items-center gap-20 grid-flow-col h-full'>
        <DetailBox />
        <DetailBox />
        <DetailBox />
      </section>
    </div>
  )
}