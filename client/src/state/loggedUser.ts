import { User } from './user';

export interface LoggedUser {
  isLoading: boolean;
  isLoaded: boolean;
  user: User;
  error: string | null;
}
