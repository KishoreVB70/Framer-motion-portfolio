"use client"
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion"; 
import ScaleAndRotate from "./ScaleAndRotate";

export default function FramerComponent() {
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
    <motion.section className="grid grid-cols-3 p-10 gap-10"
      variants={parentVariants}
      initial="hidden"
      animate="show"
    >
      <FadeIn childVariants={childVariants} />
      <ScaleAndRotate childVariants={childVariants} />
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
      <motion.div variants={childVariants} className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10" ></motion.div>
    </motion.section>
  );
}
