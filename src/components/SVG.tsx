"use client"
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const SVG = ({childVariants}: any) => {
  const {scrollYProgress} = useScroll();
  const svgVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(252, 211, 77, 1)"
    }

  }
  return (
    <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
        >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.1 21.75 12 13.5H3.75Z"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay:0.5},
                fill: {duration:2, delay:2, repeat: Infinity, repeatType: "reverse", repeatDelay:0.5}
              }}
            />
        </motion.svg>
    </motion.div>
  )
}

export default SVG