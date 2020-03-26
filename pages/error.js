import Error from 'next/error';
import fetch from 'isomorphic-unfetch';

const Page = ({ errorStatus, stars }) => {
  if (errorStatus != 200) {
    return <Error statusCode={errorStatus} />
  } else {
    return <div>No error</div>
  }
}

// Page.getInitialProps = async () => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.jsXXXXX')
//   const errorStatus = res.status;
//   const json = await res.json();

//   return { stars: json.stargazers_count, }
// }

export async function getStaticProps(ctx) {
  const res = await fetch('https://api.github.com/repos/zeit/next.jsXXXXX');
  const errorStatus = res.status;
  const json = errorStatus == 200 ? await res.json() : null;

  return {
    props: {
      errorStatus,
      stars: json && json.stargazers_count,
    },
  }
}

export default Page;
