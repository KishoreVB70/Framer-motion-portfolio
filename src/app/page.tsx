"use client"
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
    <motion.section className="grid grid-cols-3 p-10 gap-10">
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
