import React, { useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

type ContextProps<T> = [T, Dispatch<SetStateAction<T>>];

type CreateContextResult<T> = {
  Provider: React.FC<PropsWithChildren>;
  useContext: () => ContextProps<T>;
};

export const contextFrom = <T, >(
  defaultValue: T,
): { Provider: React.Provider<ContextProps<T>>; useContext: () => ContextProps<T> } => {
  const Context: React.Context<ContextProps<T>> = React.createContext<ContextProps<T>>([
    defaultValue,
    () => {},
  ]);

  return { Provider: Context.Provider, useContext: () => React.useContext(Context) };
};

/**
 * Custom createContext for quickly create context without duplicating the same code
 */
export const createContext = <T, >(defaultValue: T): CreateContextResult<T> => {
  const Context = contextFrom(defaultValue);

  const Provider = ({ children }: PropsWithChildren) => {
    const state = useState<T>(defaultValue)

    return <Context.Provider value={state}>{children}</Context.Provider>
  }

  return { Provider, useContext: Context.useContext }
};
