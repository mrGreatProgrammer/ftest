export interface loginFormType {
  email: string;
  password: string;
}
export type rolesType = "STUDENT" | "TEACHER" | "PARENT";

export interface IUserInfo {
  id: string;
  userName: string;
  email: string;
  role: rolesType[];
  // password: string;
}
