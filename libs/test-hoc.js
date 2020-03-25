

export default Comp => {

    return function TestHocComp({ Component, pageProps, ...rest }) {
        // const { Component, pageProps, ...rest } = this.props
        // console.log(Component, pageProps)
        if (pageProps) {
            pageProps.test = '123'
        }

        return (
            <Comp
                Component={Component}
                pageProps={pageProps}
                {...rest}
            />
        )
    }

    // TestHocComp.getInitialProps = Comp.getInitialProps
    // return TestHocComp

}

// export default TestHocComp(Comp)


