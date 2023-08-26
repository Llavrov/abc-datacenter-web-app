import styles from "./styles.module.css";
import {motion, useScroll} from "framer-motion";
import {useEffect, useRef, useState} from "react";

function TitleOnScroll({children}: {children: React.ReactElement}) {
    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const updateOpacity = () => {
            // @ts-ignore
            const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.pageYOffset;
            const scrollRange = [distanceFromTop, distanceFromTop + 400];
            const scrollProgress = (scrollY.get() - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);

            if (scrollProgress > -1.5) {
                setOpacity(1);
            }
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, utpRef]);

    return (
        <motion.div
            ref={utpRef}
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className={styles.card} style={{opacity: opacity}}>
                {children}
            </motion.div>
        </motion.div>
    );
}

export default TitleOnScroll;
