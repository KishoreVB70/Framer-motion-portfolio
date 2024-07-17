"use client"
import React from 'react'
import { motion } from 'framer-motion'

const ScaleAndRotate = ({childVariants}: any) => {
  return (
    <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.div className="w-1/3  h-1/3 shadow-md bg-rose-400"
        animate={{
            backgroundColor: ["blue", "red", "pink", "yellowgreen"],
            scale: [1,1.5,1.5,1],
            opacity: [1,0.5,0.5,1],
            rotate: [0,90,90,0],
            borderRadius: ["10%", "10%", "50%", "10%"]
        }}
        transition={{duration: 3, ease: "easeInOut", repeat: 1, repeatDelay: 1}}>
        </motion.div>
    </motion.div>
  )
}

export default ScaleAndRotate