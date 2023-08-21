import {PropsWithChildren} from "react";
import {type NextPage} from 'next';
import Head from 'next/head';
import Home from "@/pages/home";

export const Layout = ({children}: PropsWithChildren) =>
    <>
        <Head>
            <title>ABC Data center</title>

            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="title" content="ABC Data center - Программируем будущее вашего успеха" />
            <meta
                name="description"
                content="Многопрофильная студия предоставляет широкий спектр услуг, начиная от создания технического задания и функциональных требований до разработки и продвижения продукта."
            />
            <meta name="keywords" content="Веб-дизайн, Разработка сайтов, UI/UX, Фронтенд-разработка" />
        </Head>

        <main className="flex min-h-screen flex-col items-center">
            {children}
        </main>
    </>

const Index: NextPage = () => {
    return (
        <Home/>
    );
};

export default Index;