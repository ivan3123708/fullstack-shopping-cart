import { RouterState} from 'connected-react-router';
import { ILoggedUser } from './loggedUser';
import { ICart } from './cart';
import { ICatalog } from './catalog';
import { IFilters } from './filters';

export interface IState {
  router: RouterState;
  loggedUser: ILoggedUser;
  cart: ICart;
  catalog: ICatalog;
  filters: IFilters;
  sortBy: string;
}
