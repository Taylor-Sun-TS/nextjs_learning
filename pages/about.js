import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(import('./components/hello'))

const About = ({ name }) => (
    <div>
        <DynamicComponent name={name} />
        <div>
            <p>This is About page</p>
        </div>
    </div>
);

About.getInitialProps = async ({ query, pathname }) => {
    return { name: query.name }
};

export default About;
