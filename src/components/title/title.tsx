import React, {useEffect, useRef, useState} from 'react';
import {motion, useScroll} from "framer-motion";

import styles from './title.module.css';
import classNames from "classnames";

const Title = ({ text, delay, fontSize, mobileFontSize }: { text: string, delay: number, fontSize: number, mobileFontSize: number }) => {
    const letters = Array.from(text);
    const [isMobile, setIsMobile] = useState(false);

    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [opacity, setOpacity] = useState(0);

    const Setup = (): void => {
        window?.addEventListener('resize', () => setIsMobile(window.innerWidth <= 1200), false);
    };

    const Cleanup = (): void => {
        window?.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 1200), false);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 1200);
        }

        Setup();

        return () => {
            Cleanup();
        }
    }, []);

    useEffect(() => {
        const updateOpacity = () => {
            // @ts-ignore
            const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.pageYOffset;
            const scrollRange = [distanceFromTop, distanceFromTop + 700];
            const scrollProgress = (scrollY.get() - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);

            if (scrollProgress > -1.5) {
                setOpacity(1);
            }
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, utpRef]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={utpRef}
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            {Boolean(opacity) && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={classNames(styles.main_text, 'text-black')}
                    style={{
                        overflow: "hidden",
                        display: "flex",
                        fontSize: isMobile ? mobileFontSize : fontSize,
                        lineHeight: isMobile ? `${mobileFontSize}px` : `${fontSize}px`
                    }}
                >
                    {letters.map((letter, index) => (
                        <motion.span variants={child} key={index}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default Title;
