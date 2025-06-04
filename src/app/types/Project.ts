export type Project = {
  id: string;
  name: string;
  description: string;
  homepage: string;
  github?: string
  topics?: string[];
  media: string;
  updated_at: string;
};