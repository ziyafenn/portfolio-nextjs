import styles from "./page.module.css";
import { manrope, playfair } from "@/helpers/fonts";
import CaseStudy from "@/components/caseStudy";
import { fetchEntries } from "@/helpers/fetchEntries";
import fetchGithubRepos from "@/helpers/fetchGithubRepos";
import external from "@public/external.svg";
import Image from "next/image";

async function getData() {
  const entries = await fetchEntries({ fetchAll: false });
  const caseStudiesUnsorted = entries.items;
  const caseStudies = caseStudiesUnsorted.sort(
    (b, a) => a.fields.id - b.fields.id
  );
  const githubData = await fetchGithubRepos();
  return { caseStudies, githubData };
}

export default async function Home() {
  const { caseStudies, githubData } = await getData();

  return (
    <>
      <div className={`${styles.bgTitle} ${manrope.className} `}>
        <p>Design&Code</p>
      </div>

      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.bio}>
            <p className={`${styles.header} ${playfair.className}`}>
              Multidisciplinary UX Engineer with ~10 years of experience in
              front-end development and digital design.
              <br />
              Based in Nuremberg, Germany.
            </p>

            <div className={styles.additionalInfo}>
              <p className={styles.subtitle}>
                Specialise in front-end development, design systems, DesignOps,
                UI/UX and data-based initiatives.
              </p>

              <p className={styles.subtitle}>
                I write TypeScript and Dart. I build SPA/SSR & Jamstack, Node
                and cross-platform apps for mobile and web.
              </p>

              <p className={styles.subtitle}>
                Currently at{" "}
                <b>
                  <a
                    className={styles.frankalink}
                    href="https://www.reliant.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reliant AI,{" "}
                  </a>
                </b>
                working on UI solutions that leverage generative AI to simplify data collection, organization, and inspection in the commercial biopharma sector.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <h2>Case Studies</h2>
          <div className={styles.casesGrid}>
            {caseStudies.map((item) => (
              <CaseStudy
                title={item.fields.title}
                description={item.fields.description}
                tags={item.fields.tags}
                color={item.fields.color}
                key={item.fields.id}
                slug={item.fields.slug}
              />
            ))}
          </div>
          <div className={styles.newArticle}>
            <p>
              Latest article on Medium:{" "}
              <a
                href="https://medium.com/@ziyafenn/password-protect-page-in-nextjs-5820cd7078ae"
                target="_blank"
              >
                Password protect page in Next.js{" "}
              </a>
              <Image
                src={external}
                width={12}
                height={12}
                alt="external"
                color="white"
              />
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <h2>Github repos</h2>
          <div className={styles.repos}>
            {githubData.map((item) => (
              <div key={item.id}>
                <a href={item.html_url} target="_blank">
                  <div className={styles.nameDesc}>
                    <div className={styles.name}>{item.name}</div>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.language}>{item.language}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
