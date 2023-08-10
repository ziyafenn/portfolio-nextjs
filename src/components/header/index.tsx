import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        Ziya Fenn
      </Link>
      <Link
        className={styles.email}
        target="_blank"
        href="mailto:hello@ziyafenn.com"
      >
        hello@ziyafenn.com
      </Link>
    </header>
  );
}
