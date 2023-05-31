import React, { useCallback } from "react";
import TicTacProvider from "./TicTacToeContext";
import { checkWinner, generateGrid } from "./utils";
import { Player } from "./types";
import Grid from "./TicTacGrid";

const TicTacToe = () => {
  const x = 3;
  const y = 3;

  const [grid, setGrid] = React.useState<string[][]>(
    generateGrid(x, y, Player.EMPTY)
  );
  const [player, setPlayer] = React.useState<string>(Player.X);
  const [winner, setWinner] = React.useState<string | undefined>(undefined);
  const checkGrid = useCallback(() => {
    const winner = checkWinner(grid);

    if (winner) {
      setWinner(winner);
    }

    if (grid.every(row => row.every(col => col !== Player.EMPTY))) {
      setWinner(Player.EMPTY);
    }
  }, [grid]);

  return (
    <TicTacProvider
      value={{
        grid,
        setGrid,
        player,
        setPlayer,
        checkWinner: checkGrid,
        winner
      }}
    >
      <div className={"app-container"}>
        {winner !== Player.EMPTY && winner && (
          <span className={"winner"}>
            Player &nbsp;<strong>{winner}</strong> &nbsp; Has won{" "}
          </span>
        )}

        {winner === Player.EMPTY && (
          <span className={"winner"}>It is a Tie!</span>
        )}

        <Grid />
        {winner && (
          <button
            className={"reset-button"}
            onClick={() => {
              setGrid(generateGrid(x, y, Player.EMPTY));
              setWinner(undefined);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </TicTacProvider>
  );
};

export default TicTacToe;
