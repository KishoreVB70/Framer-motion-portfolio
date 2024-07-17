"use client"
import React from 'react'
import { motion } from 'framer-motion'

const HoverButton = ({childVariants}: any) => {
  return (
    <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.button className='w-1/2 py-4 bg-emerald-600 rounded-lg text-2xl text-gray-100 font-light tracking-wide'
            whileHover={{backgroundColor: "green", scale: 1.1, y: -5}}
            whileTap={{scale: 0.9}}
            transition={{bounceDamping: 2, bounceStiffness: 500}}
            >
            Click
        </motion.button>
    </motion.div>
  )
}

export default HoverButton