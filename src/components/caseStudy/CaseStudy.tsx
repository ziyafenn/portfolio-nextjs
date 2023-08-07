import { Post } from "@/helpers/types";
import styles from "./CaseStudy.module.css";
import Link from "next/link";
import { manrope } from "@/helpers/fonts";
import { caseStudyPath } from "@/helpers/variables";

export default function CaseStudy(props: Omit<Post, "body" | "id">) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.color }}>
      <Link href={`/${caseStudyPath}/${props.slug}`}>
        <div className={styles.content}>
          <ul>
            {props.tags.map((tag) => (
              <li key={tag} className={manrope.className}>
                {tag}
              </li>
            ))}
          </ul>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.arrow}>
          <span>Read case study</span>
          {/* <img src="{arrow}" /> */}
        </div>
      </Link>
    </div>
  );
}
