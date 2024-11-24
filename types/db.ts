export type User = {
  id: string;
  username: string;
  email: string;
};

export type CreateUserData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};
