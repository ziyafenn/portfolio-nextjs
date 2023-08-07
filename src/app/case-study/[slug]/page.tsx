import { fetchEntries } from "@/helpers/fetchEntries";
import styles from "./page.module.css";
import "./prism-holi-theme.css";
import Link from "next/link";
import { caseStudyPath } from "@/helpers/variables";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFigure from "rehype-figure";
import rehypePrism from "rehype-prism-plus";
import rehypeReact from "rehype-react";
import React from "react";

export async function generateStaticParams() {
  const entries = await fetchEntries();
  return entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));
}

async function getData() {
  const entries = await fetchEntries();
  const caseStudies = entries.items;
  return caseStudies;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const caseStudies = await getData();
  const entry = caseStudies.find((post) => post.fields.slug === params.slug);
  const post = entry!.fields;
  const body = await unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeFigure) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(rehypePrism, { defaultLanguage: "ts" })
    //  .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
    .use(rehypeReact, {
      createElement: React.createElement,
    })
    //.use(rehypeStringify) // Serialize HTML syntax tree
    .process(post.body)
    .then((file) => file.result)
    .catch((error) => {
      throw error;
    });

  return (
    <main className={styles.main}>
      <article>
        <h1>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>
        <hr />
        {body}
      </article>
      <section>
        <h2>More case studies</h2>
        {caseStudies.map((caseStudy) => {
          const { fields } = caseStudy;
          if (fields.slug !== post.slug)
            return (
              <div className={styles.relatedCase} key={fields.slug}>
                <Link href={`/${caseStudyPath}/${fields.slug}`}>
                  <h3>{fields.title}</h3>
                  <p>{fields.description}</p>
                  <p>Read More</p>
                </Link>
              </div>
            );
        })}
      </section>
    </main>
  );
}
