import Error from 'next/error';
import fetch from 'isomorphic-unfetch';

const Page = ({ errorStatus, stars }) => {
  if (errorStatus != 200) {
    return <Error statusCode={errorStatus} />
  } else {
    return <div>No error</div>
  }
}

Page.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.jsXXXXX')
  const errorStatus = res.status;
  const json = await res.json();

  return { stars: json.stargazers_count, errorStatus}
}

export default Page;
