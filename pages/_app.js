import App from 'next/app'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import MyContext from '../libs/my-context'
import store from '../redux/index'



class MyApp extends App {

    state = {
        context: 'context provider',
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
                    <MyContext.Provider value={this.state.context}>
                        <Component { ...pageProps }/>
                    </MyContext.Provider>
                </Provider>
            </Layout>
        )
    }
}


export default MyApp
