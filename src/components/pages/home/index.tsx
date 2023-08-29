import Main from "@/components/pages/home/main/main";
import Image from "next/image";
import {useEffect, useState} from "react";
import Title from "@/components/title/title";
import TitleOnScroll from "@/components/common/titleOnScroll";

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

            <div id="about-us" className="h-[900px] md:h-[500px] overflow-hidden bg-orangeLight flex items-center gap-10 flex-col relative w-full">
                <div className="flex justify-center absolute z-10 top-0 max-w-[1200px] flex-col py-[100px] md:py-0">
                    <div className="relative w-full h-[130px] md:h-[80px]">
                        <p className="text-heading-48 md:text-heading-xm md:pl-5 text-white pt-10 md:pt-3">О нас</p>
                    </div>
                    <TitleOnScroll>
                        <h2 className="w-full text-white text-heading-large lg_min:text-heading-xxl md:text-heading-xl md:pl-5 pb-[50px] box-border">
                            Мы создаём современный независимый коммерческий центр обработки данных
                            в Новосибирске.
                        </h2>
                    </TitleOnScroll>
                </div>
                <Image className="h-full max-h-[720px] w-full max-w-[1050px] object-contain absolute right-0 top-[100px]" src={'/map.png'} alt={'map of russia'} width={1820} height={1195} />
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
                        <div className="relative flex-col gap-3 w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] content:flex-wrap">
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Количество it-стоек
                                    <span className="text-heading-m text-orange m-0 ml-2">
                                        198
                                    </span>
                                </p>
                            </div>
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Максимальная мощность эл. Установок
                                    <span className="text-heading-m text-orange m-0 ml-2">
                                        2,5 МВт
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-col gap-3 w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] content:flex-wrap">
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Заявленный уровень надежности
                                    <span className="text-heading-m text-orange m-0 ml-2">
                                        TIER III
                                    </span>
                                </p>
                            </div>
                            <div className="w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] relative p-5 box-border h-[165px] bg-card rounded-3 overflow-hidden">
                                <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                    Общая площадь
                                    <span className="text-heading-m text-orange m-0 ml-2">
                                        809,5 м2
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 pt-3 md:px-5 box-border content:flex-wrap content:justify-center">
                        <div className="w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 w-[400px] md:text-heading-s md:w-full">
                                Возможность размещения ремонта
                                оборудования без остановки ЦОД
                            </p>
                        </div>
                        <div className="w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                Резервирование активного оборудования охлаждения
                                <span className="text-heading-m text-orange m-0 ml-2 whitespace-nowrap">
                                    N + 1
                                </span>
                            </p>
                        </div>
                        <div className="w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                2 энерговвода с ИБП
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 pt-3 md:px-5 box-border content:flex-wrap content:justify-center">
                        <div className="w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                ДГУ – запас топлива 360 мин.
                                с обеспечением доставки с АЗС
                            </p>
                        </div>
                        <div className="w-[33%] flex md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[165px] p-5 relative bg-card rounded-3 overflow-hidden">
                            <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                Операторов телеком подключения
                                <span className="text-heading-m text-orange m-0 ml-2">
                                    {'>'} 4
                                </span>
                            </p>
                        </div>
                        <div className="w-[33%] md:w-full h-[165px] bg-card rounded-3 overflow-hidden minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px]">
                            <Image className="w-full h-full object-cover" src={'/figure_02.png'} alt={'insert'} width={1024} height={792} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full">
                <Image
                    className="h-full max-h-[720px] w-full max-w-[1200px] object-contain"
                    src={'/middle_line.svg'}
                    alt={'map of russia'}
                    width={1440}
                    height={300}
                />
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full">
                <div className="w-full flex justify-center max-w-[1200px] flex-col">
                    <p className="w-full text-heading-48 md:px-5 box-border md:text-heading-xm whitespace-nowrap pt-6">
                        Что мы вам предлагаем?
                    </p>
                    <div className="flex flex-row gap-3 md:flex-col">
                        <div className="flex flex-col gap-3 w-full md:px-5 box-border">
                            <div className="flex flex-col gap-3 w-full max-w-[810px]">
                                <div className="flex flex-col gap-6 md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[260px] md:h-[240px] p-8 md:p-4 relative bg-card rounded-6">
                                    <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.5" cy="11.5" r="4.5" fill="black"/>
                                        </svg>

                                        Colocation
                                    </p>
                                    <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.5" cy="11.5" r="4.5" fill="black"/>
                                        </svg>

                                        Услугу по Соединению между операторами связи и конечными пользователями
                                    </p>
                                    <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.5" cy="11.5" r="4.5" fill="black"/>
                                        </svg>

                                        Сервис “удаленные руки”
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-full max-w-[810px]">
                                <div className="flex flex-col gap-6 md:w-full minn:min-w-[280px] content_min:min-w-[440px] content_min:max-w-[440px] h-[260px] md:h-[280px] p-8 md:p-4 relative bg-card rounded-6">
                                    <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.5" cy="11.5" r="4.5" fill="black"/>
                                        </svg>

                                        Предоставляем склад для вашего оборудования
                                    </p>
                                    <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.5" cy="11.5" r="4.5" fill="black"/>
                                        </svg>

                                        По запросу предоставим рабочие места для вашего персонала
                                    </p>
                                    <p className="text-heading-m m-0 md:text-heading-s md:w-full">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.5" cy="11.5" r="4.5" fill="black"/>
                                        </svg>

                                        Наша техническая поддержка работает 24/ 7 / 365
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-full md:h-[200px] md:px-5 box-border bg-card rounded-3 overflow-hidden">
                            <Image className="w-full h-full object-cover md:rounded-3" src={'/center.jpeg'} alt={'insert'} width={1024} height={792} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white flex items-center gap-10 flex-col relative w-full">
                <div className="w-full box-border flex justify-center max-w-[1200px] flex-col py-[100px] md:pt-5 md:pb-15">
                    <p className="w-full px-5 text-heading-48 md:text-heading-xm pt-6">
                        Запуск
                    </p>
                    <div className="flex flex-col p-10 box-border gap-3 w-full bg-card h-[360px] lg_min:h-[240px] md:h-[160px] rounded-3">
                        <Title text={'Декабрь 2023'} delay={0} fontSize={120} mobileFontSize={36} />
                        <div className="flex gap-4 md:gap-2 w-full pt-6 md:pt-0 justify-end">
                            <Title text={'осталось'} delay={0.6} fontSize={42} mobileFontSize={14} />
                            <Title text={'70'} delay={0.6} fontSize={42} mobileFontSize={14} />
                            <Title text={'доступных'} delay={0.8} fontSize={42} mobileFontSize={14} />
                            <Title text={'к'} delay={0.95} fontSize={42} mobileFontSize={14} />
                            <Title text={'аренде'} delay={1.25} fontSize={42} mobileFontSize={14} />
                            <Title text={'It-стоек'} delay={1.5} fontSize={42} mobileFontSize={14} />
                        </div>
                    </div>
                </div>
            </div>

            <div id="contacts" className="bg-white flex items-center gap-10 flex-col relative w-full overflow-hidden">
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
