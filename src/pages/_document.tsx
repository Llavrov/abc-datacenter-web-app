// pages/_document.tsx
import Document, {
    Html,
    Main,
    Head,
    NextScript,
    DocumentProps,
    DocumentContext,
} from "next/document";
import { AppType } from "next/app";
import { MyAppProps } from "./_app";
import createEmotionCache from "../utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

interface MyDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
    return (
        <Html lang="en">
            <Head>
                <meta name="title" content="ABC Data center - Мы создаём современный независимый коммерческий центр обработки данных в Новосибирске." />
                <meta
                    name="description"
                    content="ABC Data Center - ведущий в области обработки данных в Новосибирске. Надежное размещение, высокая производительность, профессиональная поддержка."
                />
                <meta name="keywords" content="ABC Data Center, обработка данных, датацентр Новосибирск, надежное размещение данных, высокая производительность, техническая поддержка"/>
                <meta property="og:title" content="ABC Data center - Мы создаём современный независимый коммерческий центр обработки данных в Новосибирске."/>
                <meta property="og:description" content="ABC Data Center - ведущий в области обработки данных в Новосибирске. Надежное размещение, высокая производительность, профессиональная поддержка."/>
                <meta property="og:image" content="/logo.ico"/>
                <link rel="icon" href="/favicon.ico" />

                {/* Insertion point for client. This connects with createEmotionCache.ts */}
                <meta name="emotion-insertion-point" content="" />
                {emotionStyleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    // We're passing `emotionCache` to App component
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (
                App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
            ) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
