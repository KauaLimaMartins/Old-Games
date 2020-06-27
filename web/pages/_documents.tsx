import Document, { Html, DocumentContext, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <Html lang="pt-BR">
                        <Head>
                            <link
                                rel="stylesheet"
                                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                                crossOrigin=""
                            />
                            <link rel="con" href="/favicon.ico" />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
                                rel="stylesheet"
                            />
                        </Head>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </Html>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
