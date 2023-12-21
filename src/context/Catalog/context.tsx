import { createContext } from 'utils';
import type { TDish } from 'types';

export const {
  Provider: CatalogProvider,
  useContext: useContextCatalog,
} = createContext<Array<TDish>>([]);
