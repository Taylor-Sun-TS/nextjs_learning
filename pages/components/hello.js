import styles from './hello.module.css';

const Hello = ({ name }) => (
    <div className={styles.hello}>
        Hello {name}
    </div>
);

export default Hello;
