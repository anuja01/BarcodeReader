import React from 'react';

export const Context = React.createContext({});
interface Children { children: JSX.Element }
export const ContextProvider = (params: Children) => (
  <Context.Provider
    value={{ name: 'Anuja' }}
  >
    {params.children}
  </Context.Provider>
);
