import React, { createContext, ReactNode, useState } from 'react';

interface Item {
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
}

interface Author {
  name: string;
  lastname: string;
}

interface AppContext {
  author: Author;
  categories: string[];
  items: Item[];
}

interface PropsAppContext {
  state: AppContext;
  setState: React.Dispatch<React.SetStateAction<AppContext>>;
}

interface AppContextProviderProps {
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

const AppContext = createContext({} as PropsAppContext);

function AppContextProvider({ children }: AppContextProviderProps) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;
