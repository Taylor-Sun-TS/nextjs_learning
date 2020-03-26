import fetch from 'isomorphic-unfetch';

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  if(!posts || posts.length < 1) {
    return ''
  }

  const items = [];
  posts.forEach(post => {
    if (post.copy) {
      items.push({
        id: post.cell_id,
        title: post.copy.title
      })
    }

    const subCells = post.cells;
    if (subCells && subCells.length > 0) {
      subCells.map(cell => {
        if (cell.copy) {
          items.push({
            id: cell.cell_id,
            title: cell.copy.title
          })
        }
      });
    }
  })

  return (
    <ul>
      {items.map(item => (
        item ? <li key={item.id}>{item.title}</li> : ''
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(ctx) {
  // Call an external API endpoint to get posts.
  const res = await fetch('https://preprod-api.apps.burberry.com/v1/ecom-env-proxy/rc1/pages//men/?country=CN&language=en');
  const response = await res.json();
  const posts = response.response.data.templates[0].cells;

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog;