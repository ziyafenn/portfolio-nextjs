import { manrope } from "@/helpers/fonts";
import styles from "./tag.module.css";

export default function Tag(props: { label: string }) {
  return (
    <li className={`${manrope.className} ${styles.tag}`}>{props.label}</li>
  );
}
