import React from "react";
import { createContext, ReactNode } from "react";
import { Graph as IGraph } from "@antv/g6";
import { ApisType } from "@antv/graphin/lib/apis/types";
import { ThemeType } from "@antv/graphin";
import LayoutController from "@antv/graphin/lib/layout";

const defaultGraphinContext = {
  graph: null,
  apis: null,
  theme: null,
  layout: null,
  isGraphinReady: false,
};

type MyGraphinContextType = {
  graph: IGraph | null;
  apis: ApisType | null;
  theme: ThemeType | null;
  layout: LayoutController | null;
  isGraphinReady: boolean;
  setGraphinContext: React.Dispatch<
    React.SetStateAction<{
      graph: IGraph | null;
      apis: ApisType | null;
      theme: ThemeType | null;
      layout: LayoutController | null;
      isGraphinReady: boolean;
    }>
  >;
};
const defaultGraphinContextValue =
  defaultGraphinContext as MyGraphinContextType;
const GraphinContext = createContext<MyGraphinContextType>(
  defaultGraphinContextValue
);
GraphinContext.displayName = "GraphinContext";

type GraphinContextValues = {
  graph: IGraph | null;
  apis: ApisType | null;
  theme: ThemeType | null;
  layout: LayoutController | null;
  isGraphinReady: boolean;
  setGraphinContext: React.Dispatch<
    React.SetStateAction<{
      graph: IGraph | null;
      apis: ApisType | null;
      theme: ThemeType | null;
      layout: LayoutController | null;
      isGraphinReady: boolean;
    }>
  >;
};

/**
 * @description
 * This provider is responsible for managing the GraphinProvider state.
 * More info: https://kentcdodds.com/blog/authentication-in-react-applications
 *
 * @example
 * <GraphinProvider>{children}</GraphinProvider>
 */
const GraphinProvider = ({ children }: { children: ReactNode }) => {
  const [graphinContex, setGraphinContext] = React.useState<{
    graph: IGraph | null;
    apis: ApisType | null;
    theme: ThemeType | null;
    layout: LayoutController | null;
    isGraphinReady: boolean;
  }>({
    graph: null,
    apis: null,
    theme: null,
    layout: null,
    isGraphinReady: false,
  });

  const contextValues = {
    ...graphinContex,
    setGraphinContext,
  } as GraphinContextValues;
  return (
    <GraphinContext.Provider value={contextValues}>
      {children}
    </GraphinContext.Provider>
  );
};

/**
 * @description
 * A hook responsible for interacting with and retrieving data from GraphinContext.
 * @example
 * const {graph, api} = useGraphin();
 */
const useGraphin = () => {
  const context = React.useContext(GraphinContext);
  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error(`useGraphin must be used within a GraphinProvider`);
  }
  return context;
};
export { GraphinProvider, useGraphin };
