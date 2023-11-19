export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
