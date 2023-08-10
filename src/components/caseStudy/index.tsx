import { Post } from "@/helpers/types";
import styles from "./caseStudy.module.css";
import Link from "next/link";
import { caseStudyPath } from "@/helpers/variables";
import Arrow from "@public/arrow-right.svg";
import Image from "next/image";
import Tag from "../tag";

export default function CaseStudy(props: Omit<Post, "body" | "id">) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.color }}>
      <Link href={`/${caseStudyPath}/${props.slug}`}>
        <div className={styles.content}>
          <ul>
            {props.tags.map((tag) => (
              <Tag label={tag} key={tag} />
            ))}
          </ul>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.arrow}>
          <span>Read case study</span>
          <Image src={Arrow} alt="arrow" width={24} height={24} />
        </div>
      </Link>
    </div>
  );
}
