import { RouterState} from 'connected-react-router';
import { LoggedUser } from './loggedUser';
import { Cart } from './cart';
import { Catalog } from './catalog';
import { Filters } from './filters';

export interface State {
  router: RouterState;
  loggedUser: LoggedUser;
  cart: Cart;
  catalog: Catalog;
  filters: Filters;
  sortBy: string;
}
