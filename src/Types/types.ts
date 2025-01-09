export interface user {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  isVerified: boolean;
}

export interface createUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}
