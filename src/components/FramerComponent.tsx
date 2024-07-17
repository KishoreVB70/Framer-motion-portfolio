"use client"
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion"; 
import ScaleAndRotate from "./ScaleAndRotate";
import HoverButton from "./HoverButton";
import DragAndDrop from "./DragAndDrop";
import ScrollProgress from "./ScrollProgress";
import SVG from "./SVG";
import MoreScroll from "./MoreScroll";

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
    <>
      <motion.section className="grid grid-cols-3 p-10 gap-10"
        variants={parentVariants}
        initial="hidden"
        animate="show"
        >
        <FadeIn childVariants={childVariants} />
        <ScaleAndRotate childVariants={childVariants} />
        <HoverButton childVariants={childVariants} />
        <DragAndDrop childVariants={childVariants} />
        <ScrollProgress childVariants={childVariants} />
        <SVG childVariants={childVariants}/>
      </motion.section>
      <MoreScroll />
    </>
  );
}
