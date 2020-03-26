import dynamic from 'next/dynamic';
import HelloBundle from './components/helloBundle';

const DynamicComponent = dynamic(import('./components/hello'),
    {
        ssr: false,
        loading: () => <p>loading...</p>
    }
)

const About = ({ name }) => (
    <div>
        <div>
            <p>This is About page</p>
        </div>
        <DynamicComponent name={name} />
        <HelloBundle hello1={name} hello2='qaz' />
    </div>
);

// About.getInitialProps = async ({ query, pathname }) => {
//     return { name: query.name }
// };

export async function getServerSideProps({ query, pathname }) {
    return {
        props: {
            name: query.name
        }
    }
  }

export default About;
