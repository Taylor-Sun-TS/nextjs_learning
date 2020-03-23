import 'isomorphic-unfetch';
import Link from 'next/link';

const Page = ({ stars }) =>
    <div>
        <h1>Welcome to next.js!</h1>
        <div>
            Next stars: {stars}⭐️
        </div>
        <br />
        <div>
            Click{' '}
            <Link href="/about">
                <a>here</a>
            </Link>{' '}
            to read more
        </div>
    </div>
;

Page.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
};

export default Page;
