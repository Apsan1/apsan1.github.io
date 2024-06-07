import React,{useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const Reveal = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

    return ( 
        <div ref={ref} className="relative overflow-hidden">
           <motion.div
            variants={
                {
                    hidden: {opacity: 0, y: 100},
                    visible: {opacity: 1, y: 0}
                }
            }
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, type: "tween"}}

           >{children}</motion.div> 
        </div>
    );
};

export const RevealLeft = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

    return ( 
        <div ref={ref} className="relative h-auto overflow-hidden">
           <motion.div
            variants={
                {
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0}
                }
            }
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, type: "tween"}}

           >{children}</motion.div> 
        </div>
    );
};

export const dropDown = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

    return ( 
        <div ref={ref} className="relative h-auto overflow-hidden">
           <motion.div
            variants={
                {
                    
                }
            }
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, type: "tween"}}

           >{children}</motion.div> 
        </div>
    );
};

export const FadeIn = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

    return ( 
        <div ref={ref} className="relative h-auto overflow-hidden">
           <motion.div
            variants={
                {
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }
            }
            initial="hidden"
            animate={mainControls}
            transition={{duration: 1, type: "tween"}}

           >{children}</motion.div> 
        </div>
    );
};

export const fadeDown = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView]);

    return ( 
        <div ref={ref} className="relative h-auto overflow-hidden">
           <motion.div
            variants={
                {
                    hidden: {opacity: 0},
                    visible: {opacity: 1}
                }
            }
            initial="hidden"
            animate={mainControls}
            transition={{duration: 3, type: "tween"}}

           >{children}</motion.div> 
        </div>
    );
}

export function scrollDown (destination) {
    const element = document.getElementById(destination);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
};