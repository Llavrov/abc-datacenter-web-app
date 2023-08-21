import React from 'react';
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";

function Projects() {
    const { isMobile } = useResponsive();

    return (
        <div className="relative w-full max-w-screen-xl flex-col items-center content:px-4">
            <div className="relative h-full w-full flex flex-row gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="relative overflow-hidden w-full max-w-[870px] h-[400px] border border-solid border-black rounded-3">
                        <div className="absolute z-10 flex gap-2 top-5 left-5">
                            <div className="border border-solid border-black rounded-5 p-[6px]">
                                <p className="text-text-s m-0 p-0">МАССМАРКЕТИНГ</p>
                            </div>
                            <div className="border border-solid border-black rounded-5 p-[6px]">
                                <p className="text-text-s m-0 p-0">ТАРГЕТИНГ</p>
                            </div>
                            <div className="border border-solid border-black rounded-5 p-[6px]">
                                <p className="text-text-s m-0 p-0">SMM</p>
                            </div>
                        </div>

                        <Image src={'/case_01.png'} alt={''} width={1310} height={1023} style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }} />
                    </div>
                    <div className="relative overflow-hidden w-full max-w-[870px] h-[400px] border border-solid border-black rounded-3">
                        <div className="absolute z-10 flex gap-2 top-5 left-5">
                            <div className="border border-solid border-black rounded-5 p-[6px]">
                                <p className="text-text-s m-0 p-0">SMM</p>
                            </div>
                            <div className="border border-solid border-black rounded-5 p-[6px]">
                                <p className="text-text-s m-0 p-0">CRM</p>
                            </div>
                        </div>

                        <Image src={'/case_02.png'} alt={''} width={1350} height={750} style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }} />
                    </div>
                    <div className="relative overflow-hidden w-full max-w-[870px] h-[400px] border border-solid border-black rounded-3">
                        <div className="absolute z-10 flex gap-2 top-5 left-5">
                            <div className="border border-solid border-black rounded-5 p-[6px]">
                                <p className="text-text-s m-0 p-0">SMM</p>
                            </div>
                        </div>

                        <Image src={'/case_03.png'} alt={''} width={1360} height={810} style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }} />
                    </div>
                </div>

                <div className="relative h-[1540px] w-[90px] flex justify-center items-center">
                    <p className="text-heading-48 rotate-[270deg]">Проекты</p>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="flex justify-between flex-col bg-primary w-full max-w-[670px] h-[610px] border border-solid border-black rounded-3 p-5 box-border">
                        <div className="">
                            <p className="text-48 text-white m-0">
                                ЗАКАЖИТЕ КОНСУЛЬТАЦИЮ <br/> У НАС
                            </p>

                            <p className="text-text-m text-secondary m-0">
                                Заполните форму и мы обязательно напишем вам в течение дня
                            </p>
                        </div>

                        <div className="">
                            <p className="text-text-s text-secondary m-0 mb-3">
                                Нажимая на кнопку «Отправить», я даю согласие на обработку
                                персональных данных и соглашаюсь с политикой конфиденциальности
                            </p>
                            <div className="w-full border border-secondary border-solid cursor-pointer rounded-3">
                                <p className="text-text-m text-secondary text-center">
                                    ОТПРАВИТЬ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[670px] h-[610px] border border-solid border-black rounded-3">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
