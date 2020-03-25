import App from 'next/app'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import store from '../redux/index'

import testHoc from '../libs/test-hoc'



class MyApp extends App {

    state = {

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
                <Provider store={store}>
                    <Component { ...pageProps }/>
                </Provider>
            </Layout>
        )
    }
}


export default testHoc(MyApp)
