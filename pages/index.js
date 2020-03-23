import 'isomorphic-unfetch';
import Link from 'next/link';
import Router from 'next/router';

/*
Router.beforePopState(({ url, as, options }) => {
    // I only want to allow these two routes!
    if (as !== "/" || as !== "/other") {
      // Have SSR render bad routes as a 404.
      window.location.href = as
      return false
    }

    return true
});
*/

const handler = () =>
    Router.push({
        pathname: '/about',
        query: { name: 'Zeit' }
    })
;

const handleRouteChange = url => {
    console.log('App is changing to: ', url)
};

Router.events.on('routeChangeStart', handleRouteChange);
Router.events.on('routeChangeError', (err, url) => {
    if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`)
    }
});

const Page = ({ stars }) =>
    <div>
        <h1>Welcome to next.js!</h1>
        <div>
            Next stars: {stars}⭐️
        </div>
        <br />
        <div>
            Click{' '}
            <Link href={{ pathname: '/about', query: { name: 'Abcd' }}} prefetch scroll={false}>
                <a>here</a>
            </Link>{' '}
            to read more
        </div>
        <div>
            Click <span onClick={handler}>here</span> to error age
        </div>
    </div>
;

Page.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
};

export default Page;
