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
        staggerChildren: 0.25,
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
      <div className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></div>
      <div className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></div>
      <div className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></div>
      <div className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></div>
      <div className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></div>
      <div className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></div>
    </motion.section>
    </div>

  );
}
