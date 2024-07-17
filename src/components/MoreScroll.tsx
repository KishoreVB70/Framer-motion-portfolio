"use client";
import {motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const MoreScroll = () => {
    // For the header
    const containerReference = useRef(null);
    const isInView = useInView(containerReference, {once: true})
    const animation = useAnimation()

    // For para
    const {scrollYProgress} = useScroll({
        target: containerReference,
        offset: ["start end", "end start"]
    })
    const p1Value = useTransform(scrollYProgress, [0,0.5,0.8, 1], ["-100%", "0%", "0%", "-100%"])
    const p2Value = useTransform(scrollYProgress, [0,0.5,0.8, 1], ["100%", "0%", "0%", "100%"])

    // For header
    useEffect(() => {
        if (isInView) {
            animation.start("visible");
        }
    }, [isInView]);

  return (
    <>
        <div className='flex flex-col gap-10 mb-10' ref={containerReference}>
            <motion.h1 className='text-5xl tracking-wide text-slate-100 text-center'
                initial="hidden"
                animate={animation} 
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity:1, y:0}
                }}
                transition={{delay: 0.3}}
            >
                Keep scrolling
            </motion.h1>
            <motion.p className='text-slate-100 font-thin text-4xl w-1/2 mx-auto'
                style={{translateX: p1Value}}
            >
                falsdkjf kahsdkjfhasdkj laksdfjlkasjdf ruioewurio jfalskjflkasj rio23uroiwu jaslfkjaslkdf asdf iuoyoiuy  asfas fa
            </motion.p>
            <motion.p className='text-slate-100 font-thin text-4xl w-1/2 mx-auto'
                style={{translateX: p2Value}}
            >
                falsdkjf kahsdkjfhasdkj laksdfjlkasjdf ruioewurio jfalskjflkasj rio23uroiwu jaslfkjaslkdf asdf iuoyoiuy  asfas fa
            </motion.p>
        </div>
        <div className='h-[100vh]'>

        </div>
    </>
  )
}

export default MoreScroll