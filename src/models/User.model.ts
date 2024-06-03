export type User = {
  id: string;
  email: string;

  first_name: string;
  last_name: string;
  photo_url: string;

  google_id?: string;
  github_id?: string;
};
