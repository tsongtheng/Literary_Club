export type blogsCardProps = {
  id: number;
  topic: string;
  time: string;
  blogImage: string;
  heading: string;
  description: string;
  authorImage: string;
  authorName: string;
};

export type teamCardProps = {
  id: number;
  img: string;
  name: string;
  title: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email: string;
};
