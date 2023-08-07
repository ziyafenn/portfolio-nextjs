import { Entries } from "./types";

export const fetchEntries = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const data: Entries = await response.json();
  return data;
};
