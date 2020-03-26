import App, {Container} from 'next/app';
import React from 'react';
import './styles.css';
import Header from './components/header.js'

class MyApp extends App {
    // static async getInitialProps({ Component, router, ctx }) {
    //     let pageProps = { };

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx);
    //     }

    //     return { pageProps };
    // };

    render() {
        const { Component, pageProps } = this.props;

        return (<container>
            <Header />
            <Component {...pageProps} />
        </container>)
    }
}

export async function getStaticProps({ Component, router, ctx }) {
    let pageProps = { };

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
}

export default MyApp;
