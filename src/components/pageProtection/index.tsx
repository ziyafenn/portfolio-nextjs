"use client";
import { useState } from "react";
import styles from "./pageProtection.module.css";

export default function PageProtection() {
  const [password, setPassword] = useState<string>("");
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const request = await fetch(`/api/case-study`, {
      body: JSON.stringify({
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    });

    if (request.status !== 200) return setPasswordIncorrect(true);
    window.location.reload();
  };

  return (
    <div className={styles.backdrop}>
      <div>
        <h3>Enter password</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </div>
          {passwordIncorrect && "Password Incorrect"}
        </form>
      </div>
    </div>
  );
}
