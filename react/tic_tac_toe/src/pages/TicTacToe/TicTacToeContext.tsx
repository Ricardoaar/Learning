import React, { Dispatch, SetStateAction } from "react";

const defaultContextValues = {
  grid: [[]],
  setGrid: () => {
    console.warn("setGrid function not defined");
  },
  player: "",
  setPlayer: () => {
    console.warn("setPlayer function not defined");
  },
  checkWinner: () => {
    console.warn("checkWinner function not defined");
  },
  winner: undefined
};

interface TicTacContextProps {
  grid: string[][];
  setGrid: Dispatch<SetStateAction<string[][]>>;
  player: string;
  setPlayer: Dispatch<SetStateAction<string>>;
  checkWinner: (grid: string[][]) => void;
  winner: string | undefined;
}

export const TicTacContext =
  React.createContext<TicTacContextProps>(defaultContextValues);

const TicTacProvider = TicTacContext.Provider;

export default TicTacProvider;
