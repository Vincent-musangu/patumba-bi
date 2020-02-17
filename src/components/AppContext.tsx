import * as React from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const context = React.createContext<AppContextInterface | null>(null);
export const ContextProvider = context.Provider;

export const ContextConsumer = context.Consumer;
