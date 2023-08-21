import React, {useEffect, useState} from 'react';

import styles from './main.module.css';
import Title from "@/components/title/title";
import Image from "next/image";
import classNames from "classnames";

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className={classNames(styles.wrapper, 'h-screen overflow-hidden relative')}>
            <div className={classNames(styles.container)}>
                <div className="absolute top-[-90px] left-[-90px] md:left-[-50px] md:top-[-50px]">
                    <Image src={'/figure_03.svg'} alt={'figure'} width={isMobile ? 440 : 660} height={isMobile ? 440 : 660} />
                </div>

                <div className="w-full absolute z-20 max-w-[1200px]">
                    <div className="w-full flex flex-col pt-[150px] ml-5">
                        <Title text="ABC" delay={0.04} fontSize={isMobile ? 120 : 220} />
                        <div className="flex gap-10 md:gap-5">
                            <Title text="Data" delay={0.52} fontSize={isMobile ? 64 : 120} />
                            <Title text="center" delay={0.8} fontSize={isMobile ? 64 : 120} />
                        </div>
                    </div>
                    <div className="flex gap-4 w-full pt-[50px] ml-5 flex-wrap">
                        <div className="flex justify-center bg-primary rounded-3 text-white p-[22px] w-[300px] minn:w-[calc(100%-40px)] box-border">
                            Узнать больше
                        </div>
                        <div className="flex justify-center border border-white border-solid rounded-3 text-white p-[22px] bg-black w-[300px] minn:w-[calc(100%-40px)] box-border">
                            Связаться с нами
                        </div>
                    </div>
                </div>
                <div className="absolute top-10 right-[-65%] enormous:right-[-72%] large:right-[-75%] big:right-[-75%] lg_min:right-[-90%] md:rotate-90 md:top-[65vh] md:right-auto z-10">
                    <Image
                        className="big:w-[2000px] big:h-[680px] lg:w-[2000px] lg:h-[680px] object-contain"
                        src={'/datacenter.svg'}
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