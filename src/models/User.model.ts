export type User = {
  id: string;
  email: string;

  firstName: string;
  lastName: string;
  photoUrl: string;

  googleID?: string;
  githubID?: string;
};
