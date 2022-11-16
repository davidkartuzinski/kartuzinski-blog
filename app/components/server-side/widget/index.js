import styles from './widget.module.css';

function Widget(props) {
  const { children } = props;

  return <section className={styles.widget}>{children}</section>;
}
export default Widget;
