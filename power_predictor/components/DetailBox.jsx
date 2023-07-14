import styles from "../styles.module.css"
import { motion } from "framer-motion"

export default function DetailBox() {
    return (
        <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{type: "spring", bounce: 0.5, delay: 0, duration: 1}} className={`w-full outline-2 outline-solid outline-offset-2 inline-block h-1/2 rounded-3xl p-6 ${styles.DetailContainer}`}>
          <h1 className='text-white text-3xl font-semibold text-center'>Header</h1>
          <hr className='my-4' />
          <p className='text-white font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </motion.div>
    )
}