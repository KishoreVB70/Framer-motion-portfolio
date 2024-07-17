"use client"
import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = ({childVariants}: any) => {
  return (
    <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.div className="w-20 h-20 bg-stone-100 rounded-lg"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: "easeIn", delay:0.1}}
        ></motion.div>
        <motion.div className="w-20 h-20 bg-stone-100 rounded-full"
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration:0.7, ease: "easeIn", delay:0.1}}
        ></motion.div>
    </motion.div>
  )
}

export default FadeIn