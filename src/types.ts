export type Frontmatter = {
  layout: string;
  title: string;
  description: string;
  githubUrl: string;
  image?: {
    url: string;
    alt: string;
  };
  background?: string;
  tech: { title: string; url: string }[];
};
