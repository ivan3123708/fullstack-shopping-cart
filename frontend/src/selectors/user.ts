import { IState, IUser } from '@typings/state/index';

export const selectUser = (state: IState): IUser | null => state.loggedUser.user;
