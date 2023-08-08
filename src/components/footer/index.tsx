import Image from "next/image";
import styles from "./footer.module.css";
import github from "@public/github.svg";
import linkedin from "@public/linkedin.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.copyright}>Ziya Fenn © 2023</div>
        <div className={styles.social}>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ziyafenn"
          >
            <Image src={github} width={24} height={24} alt="github" />
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ziyafenn"
          >
            <Image src={linkedin} width={24} height={24} alt="linkedin" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
