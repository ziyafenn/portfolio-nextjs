import { Entries } from "./types";

export const fetchEntries = async (props: { fetchAll: boolean }) => {
  const allEntries = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;
  const entriesPreview = `${allEntries}&content_type=caseStudy&select=fields.title,fields.description,fields.tags,fields.color,fields.id,fields.slug`;
  const response = await fetch(props.fetchAll ? allEntries : entriesPreview);
  const data: Entries = await response.json();
  return data;
};
