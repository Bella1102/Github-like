import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'



class MyApp extends App {

    state = {
        context: 'value',
    }
    
    static async getInitialProps(ctx) {
        const { Component } = ctx
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }
    
    render() {
        const { Component, pageProps } = this.props
    
        return (
            <Layout>
                <Component { ...pageProps }/>
            </Layout>
        )
    }
}


export default MyApp
