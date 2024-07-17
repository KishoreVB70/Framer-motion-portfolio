"use client"
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollProgress = ({childVariants}: any) => {
  const {scrollYProgress} = useScroll()
  console.log();
  return (
    <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.div className='w-40 h-1/3 aspect-square bg-gray-50/20 rounded-xl '>
          <motion.div className='w-full h-full rounded-xl origin-bottom bg-gray-400 '
            style={{scaleY: scrollYProgress}}
            >
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default ScrollProgress