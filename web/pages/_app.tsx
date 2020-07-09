import React from 'react';
import { AppProps, AppContext } from 'next/app';
import { DefaultSeo } from 'next-seo';
import cookies from 'next-cookies';

import GlobalStyles from '../styles/global';
import SEO from '../next-seo.config';
import redirectTo from '../utils/redirectTo';
import verifyToken from '../utils/verifyToken';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <DefaultSeo {...SEO} />

            <Component {...pageProps} />
        </>
    );
}

MyApp.getInitialProps = async ({ ctx, Component }: AppContext) => {
    let pageProps = {};
    const cookie = cookies(ctx);

    if (Component.getInitialProps) {
        pageProps = Component.getInitialProps(ctx);
    }

    // If the token is not found
    if (typeof cookie.token == 'undefined') {
        // don't do anything if we are on a page that doesn't require credentials
        if (
            ctx.pathname === '/login' ||
            ctx.pathname === '/register' ||
            ctx.pathname === '/'
        ) {
            return { pageProps };
        } else {
            //if we are on any other page, redirect to the login page
            redirectTo('/login', { res: ctx.res, status: 301 });
        }
    } else {
        // If you have a token in cookies, it checks whether that token is valid
        const isValidToken = verifyToken(cookie.token);

        if (isValidToken) {
            if (
                ctx.pathname === '/login' ||
                ctx.pathname === '/register' ||
                ctx.pathname === '/'
            ) {
                // If the token is valid it takes the user straight to the dashboard
                redirectTo('/dashboard', { res: ctx.res, status: 301 });
            } else {
                return pageProps;
            }
        }

        if (!isValidToken) {
            // If the token is not valid it takes to the registration page
            // and deletes the cookie containing the invalid token
            cookie.token = 'token=; expires=Wed Jul 15 2000 16:20:10 GMT-0300';
            redirectTo('/register', { res: ctx.res, status: 301 });
        }
    }

    return pageProps;
};

export default MyApp;
