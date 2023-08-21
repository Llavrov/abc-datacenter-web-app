import Main from "@/components/pages/home/main/main";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function ABCHome() {
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
        <div className="w-full flex min-h-screen flex-col items-center bg-[color:var(--light-background)]">
            <h1 className="opacity-0 absolute top-0">ABC Data center</h1>
            <Main />

            <div className="overflow-x-hidden bg-orangeLight flex items-center gap-10 flex-col relative w-full">
                <div className="flex justify-center max-w-[1200px] flex-col">
                    <div className="relative w-full h-[200px] py-[50px]">
                        <div className="absolute left-[-60px] md:left-[-35px]">
                            <Image src={'/figure_01.svg'} alt={'figure'} width={isMobile ? 120 : 196} height={isMobile ? 124 : 196} />
                        </div>
                        <p className="text-heading-48 md:text-heading-xm md:pl-5 text-white absolute z-10 pt-13 md:pt-3">О нас</p>
                    </div>
                    <h2 className="w-full px-5 text-white text-heading-large lg_min:text-heading-xxl md:text-heading-xl pb-[50px]">
                        Мы создаём современный независимый коммерческий центр обработки данных
                        в Новосибирске.
                    </h2>
                </div>
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full">
                <div className="w-full flex justify-center max-w-[1200px] flex-col py-[100px] md:py-10">
                    <p className="w-full md:px-5 box-border text-heading-48 md:text-heading-xm pt-6 md:pt-0">
                        В цифрах
                    </p>
                    <div className="relative w-full md:px-5 box-border flex gap-3 content:flex-wrap content:justify-center">
                        <div className="flex h-[342px] w-[33%] object-cover rounded-3 overflow-hidden content:hidden">
                            <Image className="w-full h-full object-cover" src={'/insert_01.png'} alt={'insert'} width={1024} height={792} />
                        </div>
                        <div className="relative flex flex-col gap-3 w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] content:flex-wrap">
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Количество строек
                                </p>
                                <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                    198
                                </p>
                            </div>
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Максимальная мощность эл. Установок
                                </p>
                                <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                    2,5 МВт
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] content:flex-wrap">
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Заявленный уровень надежности
                                </p>
                                <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                    TIER III
                                </p>
                            </div>
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Общая площадь
                                </p>
                                <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                    809,5 м2
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 pt-3 md:px-5 box-border content:flex-wrap content:justify-center">
                        <div className="w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 w-[400px] md:text-heading-s md:w-full">
                                Возможность ремонта
                                оборудования без остановки
                            </p>
                            <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                ЦОД
                            </p>
                        </div>
                        <div className="w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                Резервирование активного оборудования охлаждения
                            </p>
                            <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                N + 1
                            </p>
                        </div>
                        <div className="w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                2 энерговвода
                            </p>
                            <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                с ИБП
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 pt-3 md:px-5 box-border content:flex-wrap content:justify-center">
                        <div className="w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 w-[400px] md:text-heading-s md:w-full">
                                ЗДГУ – запас топлива 360 мин.
                                с обеспечением доставки
                            </p>
                            <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                с АЗС
                            </p>
                        </div>
                        <div className="w-[33%] md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                Операторов телеком подключения
                            </p>
                            <p className="absolute bottom-5 text-64 text-primary md:text-48_bold m-0">
                                {'>'} 4
                            </p>
                        </div>
                        <div className="w-[33%] md:w-full h-[165px] bg-card rounded-3 overflow-hidden minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px]">
                            <Image className="w-full h-full object-cover" src={'/figure_02.png'} alt={'insert'} width={1024} height={792} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full">
                <div className="w-full flex justify-center max-w-[1200px] flex-col">
                    <p className="w-full text-heading-48 md:px-5 box-border md:text-heading-xm pt-6">
                        Наша it-инфраструктура
                    </p>
                    <div className="flex gap-3 w-full md:px-5 box-border">
                        <div className="flex flex-col gap-3 w-1/2">
                            <div className="w-full h-[350px] md:h-[200px] bg-card rounded-3 overflow-hidden">
                                <Image className="w-full h-full object-cover" src={'/dt_01.png'} alt={'insert'} width={1024} height={792} />
                            </div>
                            <div className="w-full h-[700px] md:h-[400px] bg-card rounded-3 overflow-hidden">
                                <Image className="w-full h-full object-cover" src={'/dt_04.png'} alt={'insert'} width={1024} height={792} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-1/2">
                            <div className="w-full h-[700px] md:h-[400px] bg-card rounded-3 overflow-hidden">
                                <Image className="w-full h-full object-cover" src={'/dt_02.png'} alt={'insert'} width={1024} height={792} />
                            </div>
                            <div className="w-full h-[350px] md:h-[200px] bg-card rounded-3 overflow-hidden">
                                <Image className="w-full h-full object-cover" src={'/dt_03.png'} alt={'insert'} width={1024} height={792} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full">
                <div className="w-full box-border flex justify-center max-w-[1200px] flex-col py-[100px] md:pt-5 md:pb-15">
                    <p className="w-full px-5 text-heading-48 md:text-heading-xm pt-6">
                        Запуск ABC
                    </p>
                    <div className="flex flex-col p-5 box-border gap-3 w-full bg-card h-[360px] lg_min:h-[240px] md:h-[180px] rounded-3">
                        <p className="text-heading-tall lg_min:text-heading-large md_min:text-64 sm:text-heading-l m-0 text-secondary">
                            Декабрь 2023
                        </p>
                        <p className="w-full text-64 lg_min:text-48 md:text-heading-l sm:text-heading-m m-0 text-right">
                            <span className="text-heading-tall lg_min:text-heading-large md_min:text-64 sm:text-heading-l">70</span> свободных It-строек
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full overflow-hidden">
                <div className="w-full relative flex justify-center max-w-[1200px] flex-col pt-[100px] md:pt-0 mb-[-60px] md:mb-[-20px]">
                    <div className="flex w-full px-5 md:justify-center md:flex-col relative mb-[-20px] md:mb-0 gap-[40px]">
                        <div className="w-[33%] md:w-full">
                            <p className="text-heading-m m-0">
                                Наш офис
                            </p>
                            <p className="text-heading-ss-bold text-primary m-0">
                                г. Новосибирск, Сибиряков-Гвардейцев, 51/5, оф. 311
                            </p>
                        </div>
                        <div className="w-[30%] md:w-full">
                            <p className="text-heading-m m-0">
                                Телефон
                            </p>
                            <p className="text-heading-ss-bold text-primary m-0">
                                +7(383) 363-51-54
                            </p>
                        </div>
                        <div className="w-[30%] md:w-full">
                            <p className="text-heading-m m-0">
                                Почта
                            </p>
                            <p className="text-heading-ss-bold text-primary m-0">
                                info@abc-dc.ru
                            </p>
                        </div>
                    </div>
                    <p className="w-full whitespace-nowrap text-220 lg_min:text-heading-tall md:text-heading-xxl m-0 text-secondary">
                        ABC <span className="text-heading-tall lg:text-heading-xxl m-0">Data center</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
