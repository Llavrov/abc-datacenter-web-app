import React, {useEffect, useRef, useState} from 'react';

import styles from './main.module.css';
import Title from "@/components/title/title";
import Image from "next/image";
import lottie from 'lottie-web';
import logo from './logo.json';
import classNames from "classnames";

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);
    const animationRef = useRef(null);

    // add event listener
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
        if (animationRef.current) {
            const anim = lottie.loadAnimation({
                container: animationRef.current,
                renderer: 'svg',
                loop: false,
                animationData: logo,
            });
        }
    }, []);

    return (
        <div className={classNames(styles.wrapper, 'h-screen overflow-hidden relative bg-white')}>
            <div className={classNames(styles.container)}>
                <div className="w-full absolute z-20 max-w-[1200px]">
                    <div className="w-[1500px] pl-[500px] ml-[-450px] flex flex-col pt-[150px] ml-5 overflow-hidden">
                        <div
                            ref={animationRef}
                            className="h-[1100px] w-[1500px] ml-[-500px] mt-[-400px] mb-[-380px] lg_min:w-[1200px] lg_min:ml-[-370px] md:w-[700px] md:ml-[-230px] md:h-[560px] md:mt-[-350px] overflow-hidden" />
                    </div>

                    <div className="flex gap-4 w-full pt-[50px] ml-5 flex-wrap">
                        <a href="#about-us" className="m-0 text-white no-underline w-[300px] minn:w-[calc(100%-40px)] ">
                            <div className="flex cursor-pointer text-heading-ss justify-center bg-orangeLight rounded-3 text-white p-[22px] box-border">
                                Узнать больше
                            </div>
                        </a>

                        <a href="#contacts" className="text-heading-ss m-0 text-white no-underline w-[300px] minn:w-[calc(100%-40px)] ">
                            <div className="flex cursor-pointer justify-center border border-white border-solid rounded-3 text-white p-[22px] bg-black box-border">
                                Связаться с нами
                            </div>
                        </a>
                    </div>
                </div>

                <div className="absolute top-10 right-[-60%] enormous:right-[-72%] large:right-[-75%] big:right-[-75%] lg_min:right-[-90%] md:rotate-90 md:top-[65vh] md:right-auto z-10">
                    <Image
                        className="big:w-[2000px] big:h-[680px] lg_min:w-[2000px] lg_min:h-[680px] md:w-[1200px] md:h-[500px] object-contain"
                        src={'/datacenter-bg.svg'}
                        alt={'datacenter'}
                        width={2850}
                        height={1050}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;