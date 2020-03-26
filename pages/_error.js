function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }

  // Error.getInitialProps = ({ res, err }) => {
  //   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  //   return { statusCode }
  // }

  // export async function getServerSideProps(context) {
  export async function getServerSideProps({ res, err }) {
    // return {
    //   props: {}, // will be passed to the page component as props
    // }
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {
      props:
      {
        statusCode
      }
    }
  }

  export default Error;
