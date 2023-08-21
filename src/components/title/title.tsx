import React from 'react';
import { motion } from "framer-motion";

import styles from './title.module.css';
import classNames from "classnames";

const Title = ({ text, delay, fontSize }: { text: string, delay: number, fontSize: number }) => {
    const letters = Array.from(text);

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
            variants={container}
            initial="hidden"
            animate="visible"
            className={classNames(styles.main_text)}
            style={{ overflow: "hidden", display: "flex", fontSize: fontSize, lineHeight: `${fontSize}px` }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default Title;
