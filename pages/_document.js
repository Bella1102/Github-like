import Docuemnt, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'



class MyDocument extends Docuemnt {

    static async getInitialProps(ctx) {
        
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            })
            const props = await Docuemnt.getInitialProps(ctx)
            return {
                ...props,
                styles: (
                    <div>
                      {props.styles}
                      {sheet.getStyleElement()}
                    </div>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <style>{`.test{ color: red }`}</style>
                </Head>
                <body className="test">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument


