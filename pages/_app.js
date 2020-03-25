import App from 'next/app'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
// import store from '../redux/index'
// import testHoc from '../libs/test-hoc'
import testHoc from '../libs/with-redux'



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
        const { Component, pageProps, reduxStore } = this.props
    
        return (
            <Layout>
                <Provider store={reduxStore}>
                    <Component { ...pageProps }/>
                </Provider>
            </Layout>
        )
    }
}


export default testHoc(MyApp)
