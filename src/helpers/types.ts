export interface Post {
  title: string;
  description: string;
  tags: string[];
  color: string;
  id: number;
  slug: string;
  body: string;
}

export interface Item {
  metadata: {};
  sys: {};
  fields: Post;
}

export interface Entries {
  total: number;
  items: Item[];
}

export interface Repo {
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  pushed_at: string;
  id: number;
  language: string;
  fork: boolean;
}
