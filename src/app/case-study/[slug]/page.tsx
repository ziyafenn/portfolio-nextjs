import { fetchEntries } from "@/helpers/fetchEntries";
import styles from "./case-study.module.css";
import "./prism-holi-theme.css";
import Link from "next/link";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFigure from "rehype-figure";
import rehypePrism from "rehype-prism-plus";
import rehypeReact from "rehype-react";
import React from "react";
import Image from "next/image";
import ArticleBody from "@/components/article/article";
import CaseStudy from "@/components/caseStudy";
import Tag from "@/components/tag";

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

const ImgLink = (props: any) => {
  const { src, alt } = props;
  const imageLink = `https:${src}`;

  return (
    <Link href={imageLink}>
      <Image {...props} fill src={imageLink} alt={alt} />
    </Link>
  );
};

export default async function Post({ params }: { params: { slug: string } }) {
  const caseStudies = await getData();
  const entry = caseStudies.find((post) => post.fields.slug === params.slug);
  const post = entry!.fields;
  const body = await unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeFigure) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(rehypePrism, { defaultLanguage: "ts" })
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        img: ImgLink,
      },
    })
    .process(post.body)
    .then((file) => file.result)
    .catch((error) => {
      throw error;
    });

  return (
    <main className={styles.main}>
      <article>
        <h1>{post.title}</h1>
        <ul className={styles.tags}>
          {post.tags.map((tag) => (
            <Tag label={tag} key={tag} />
          ))}
        </ul>
        <p className={styles.description}>{post.description}</p>
        <hr />
        <ArticleBody body={body} />
        <hr />
      </article>
      <section>
        <h2>More case studies</h2>
        {caseStudies.map((caseStudy) => {
          const { fields } = caseStudy;
          if (fields.slug !== post.slug)
            return (
              <div className={styles.casesGrid}>
                <CaseStudy
                  color={fields.color}
                  description={fields.description}
                  slug={fields.slug}
                  tags={fields.tags}
                  title={fields.title}
                  key={fields.slug}
                />
              </div>
            );
        })}
      </section>
    </main>
  );
}
