"use client";

import { DialogHTMLAttributes, useEffect, useRef, useState } from "react";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "./prism-holi-theme.css";

export default function ArticleBody(props: {
  body: React.ReactElement;
  slug: string;
  login: boolean;
}) {
  const { body, slug, login } = props;

  const [hasAccess, setHasAccess] = useState(login);
  const [password, setPassword] = useState<string>();
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const request = await fetch(`/api/case-study/${slug}`, {
      body: JSON.stringify({
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    });

    if (request.status !== 200) return setPasswordIncorrect(true);
    return setHasAccess(true);
  };

  useEffect(() => {
    const lightbox = new SimpleLightbox("figure a");
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <dialog open={!hasAccess}>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordIncorrect && "Password Incorrect"}
          <button type="submit">Login</button>
        </form>
      </dialog>
      {body}
    </>
  );
}
