import { IUser } from './user';

export interface ILoggedUser {
  isLoading: boolean;
  isLoaded: boolean;
  user: IUser | null;
  error: string | null;
}
