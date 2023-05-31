import React, { useCallback } from "react";
import { TicTacContext } from "./TicTacToeContext";
import { CellTocProps, Player } from "./types";

const CellToc = ({ value, coords }: CellTocProps) => {
  const { player, setGrid, setPlayer, winner, checkWinner } =
    React.useContext(TicTacContext);

  const onCellClick = useCallback(() => {
    setGrid?.((prevState: string[][] = []) => {
      if (prevState[coords.x][coords.y] !== Player.EMPTY || !!winner)
        return prevState;

      const newState: string[][] = [...prevState];
      newState[coords.x][coords.y] = player;
      setPlayer(player => (player === Player.X ? Player.O : Player.X));
      checkWinner(newState);
      return newState;
    });
  }, [checkWinner, coords.x, coords.y, player, setGrid, setPlayer, winner]);

  return (
    <>
      <button className={"cell"} onClick={onCellClick}>
        <span className={`value ${value && `value--visible`}`}>{value}</span>
      </button>
    </>
  );
};

export default CellToc;
