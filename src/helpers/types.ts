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
