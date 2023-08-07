import styles from "./page.module.css";
import { manrope, playfair } from "@/helpers/fonts";
import CaseStudy from "@/components/caseStudy/CaseStudy";
import { fetchEntries } from "@/helpers/fetchEntries";

async function getData() {
  const entries = await fetchEntries();
  const caseStudiesUnsorted = entries.items;
  const caseStudies = caseStudiesUnsorted.sort(
    (b, a) => a.fields.id - b.fields.id
  );

  return caseStudies;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div className={`${styles.bgTitle} ${manrope.className} `}>
        <p>Design & Code</p>
      </div>

      <main>
        <div className={styles.intro}>
          <div className={styles.bio}>
            <p className={`${styles.header} ${playfair.className}`}>
              Multidisciplinary Product Designer and UX Engineer with ~8 years
              of experience in digital design.
              <br />
              Based in Nuremberg, Germany.
            </p>

            <div className={styles.additionalInfo}>
              <p className={styles.subtitle}>
                Specialise in DesignOps, design strategy, UI/UX, data-based
                initiatives, design systems and front-end development.
              </p>

              <p className={styles.subtitle}>
                I write JavaScript (TypeScript) and Dart. I build SPA/SSR &
                Jamstack (React, Svelte, Vanilla JS/HTML/CSS), Node and
                cross-platform (React Native, Flutter) apps for mobile and web.
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
                engineering UI solutions and improving user experience for one
                of the most robust robotic automation tools.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.caseStudies}>
          <h2>Case Studies</h2>
          <div className={styles.casesGrid}>
            {data.map((item) => (
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
      </main>
    </>
  );
}
