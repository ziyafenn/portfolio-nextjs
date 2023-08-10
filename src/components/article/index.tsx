"use client";

import { useEffect } from "react";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "./prism-holi-theme.css";

export default function ArticleBody(props: { body: React.ReactElement }) {
  useEffect(() => {
    const lightbox = new SimpleLightbox("figure a");
    return () => {
      lightbox.destroy();
    };
  }, []);

  return <>{props.body}</>;
}
