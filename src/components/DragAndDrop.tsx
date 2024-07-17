"use client"
import React from 'react'
import { motion } from 'framer-motion'

const DragAndDrop = ({childVariants}: any) => {
  return (
    <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.div className='w-1/3 h-1/3 bg-orange-400 rounded-3xl cursor-grab'
            drag
            dragConstraints={{top: -200, bottom:200, left:-200, right:200}}
            dragTransition={{bounceStiffness: 10, bounceDamping: 20}}
            >
        </motion.div>
    </motion.div>
  )
}

export default DragAndDrop