import React, { createContext, ReactNode, useState } from 'react';

export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: string;
  sold_quantity?: number;
  description?: string;
};

type Author = {
  name: string;
  lastname: string;
};

export interface IAppContext {
  author: Author;
  categories: string[];
  items: Item[];
}

interface IPropsAppContext {
  state: IAppContext;
  setState: React.Dispatch<React.SetStateAction<IAppContext>>;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

const DEFAULT_VALUE = {
  state: {
    author: {
      name: '',
      lastname: '',
    },
    categories: [] as string[],
    items: [] as Item[],
  },
  setState: () => {},
};

const AppContext = createContext({} as IPropsAppContext);

function AppContextProvider({ children }: IAppContextProviderProps) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;
