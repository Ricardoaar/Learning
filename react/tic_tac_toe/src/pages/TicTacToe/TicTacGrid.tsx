import React from "react";
import { TicTacContext } from "./TicTacToeContext";
import CellToc from "./CellTicTac";

const Grid = () => {
  const { grid = [] } = React.useContext(TicTacContext);

  return (
    <>
      <div className={"tic-tact-grid"}>
        {grid.map((row = [], i) => {
          return row.map((col, j) => {
            return (
              <CellToc
                key={`${i}-${j}-${col}`}
                value={col}
                coords={{ x: i, y: j }}
              />
            );
          });
        })}
      </div>
    </>
  );
};
export default Grid;
