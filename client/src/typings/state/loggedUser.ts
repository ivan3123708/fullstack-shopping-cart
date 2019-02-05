import { IUser } from './user';

export interface ILoggedUser {
  isLoading: boolean;
  isLoaded: boolean;
  user: IUser;
  error: string | null;
}
