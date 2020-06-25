import Document, { Html, DocumentContext } from 'next/document';
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
                        {initialProps.styles}
                        <link rel="con" href="/favicon.ico" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
                            rel="stylesheet"
                        />
                        {sheet.getStyleElement()}
                    </Html>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
