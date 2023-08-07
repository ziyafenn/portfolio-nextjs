import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>Ziya Fenn</Link>
      </div>
      <Link target="_blank" href="mailto:hello@ziyafenn.com">
        hello@ziyafenn.com
      </Link>
    </header>
  );
}
