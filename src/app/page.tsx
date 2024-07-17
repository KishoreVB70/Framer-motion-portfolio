"use client"
import { motion } from "framer-motion"; 

export default function Home() {
  const parentVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    }
  }
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
    <motion.section className="grid grid-cols-3 p-10 gap-10"
      variants={parentVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" >
        <motion.div className="w-20 h-20 bg-stone-100 rounded-lg"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, ease: "easeIn", delay:0.2}}
        ></motion.div>
        <motion.div className="w-20 h-20 bg-stone-100 rounded-full"
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration:0.7, ease: "easeIn", delay:0.2}}
        ></motion.div>
      </motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
    </motion.section>
    </div>

  );
}
