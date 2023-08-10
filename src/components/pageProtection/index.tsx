"use client";

import { useState } from "react";
import styles from "./pageProtection.module.css";

export default function PageProtection() {
  const [password, setPassword] = useState<string>("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const request = await fetch(`/api/case-study`, {
      body: JSON.stringify({
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    });

    if (request.status !== 200)
      return setPasswordIncorrect(true), setLoading(false);
    else window.location.reload();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordIncorrect) setPasswordIncorrect(false);
    setPassword(e.target.value);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => window.location.assign("/")}
        >
          X
        </button>
        <div className={styles.content}>
          <h3>Password required</h3>
          <p>
            Due to NDA, i'm not able to publicly display my work. If you want to
            read my case studies, please enter the provided password.
          </p>
          <form onSubmit={(e) => onSubmit(e)}>
            <label>Password</label>
            <div className={styles.fieldset}>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
              >
                {loading ? "..." : "Submit"}
              </button>
            </div>
            <div
              className={styles.passwordIncorrect}
              style={{ visibility: passwordIncorrect ? "visible" : "hidden" }}
            >
              Password Incorrect
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
