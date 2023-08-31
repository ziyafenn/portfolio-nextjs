import styles from "./case-study.module.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.loading}>
      <span className={styles.loader}></span>
    </div>
  );
}
