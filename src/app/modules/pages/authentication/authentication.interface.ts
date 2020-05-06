export interface User {
  uid?: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password?: string;
  emailVerified: boolean;
  picture: string;
}

export interface UserData {
  uid: string;
  firstName: string;
  lastName: string;
  displayName: string;
  name: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
}

export interface Login {
  email: string;
  password: string;
  rememberMe?: boolean;
}
