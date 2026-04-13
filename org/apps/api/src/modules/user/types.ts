export interface IUser {
  id: string;
  username?: string;
  email?: string;
  phone?: number;
  age?: number;
  balance?: number;
}

export interface IUserDocument extends IUser {}
