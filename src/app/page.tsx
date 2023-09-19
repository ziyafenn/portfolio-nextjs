import styles from "./page.module.css";
import { manrope, playfair } from "@/helpers/fonts";
import CaseStudy from "@/components/caseStudy";
import { fetchEntries } from "@/helpers/fetchEntries";
import fetchGithubRepos from "@/helpers/fetchGithubRepos";

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
                    href="https://franka.de/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Franka Emika,{" "}
                  </a>
                  <video
                    className={styles.frankavideo}
                    width="312"
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="https://franka.de/_nuxt/videos/Sequence_slow.05b9a0e.mp4"
                      type="video/mp4"
                    />
                  </video>
                </b>
                working on UI solutions and improving user experience for
                managing the robust multi-purpose robotic arm.
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
        </div>
        <div className={styles.container}>
          <h2>Latest Github activity</h2>
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
