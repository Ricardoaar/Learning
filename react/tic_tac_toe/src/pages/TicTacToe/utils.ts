import { Player } from "./types";

export const checkWinner = (grid: string[][]) => {
  let winner = undefined;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    console.log({ row });
    if (row[0] === row[1] && row[1] === row[2] && row[0] !== Player.EMPTY) {
      console.log("WON HERE");
      winner = row[0];
      break;
    }

    if (
      grid[0][i] === grid[1][i] &&
      grid[1][i] === grid[2][i] &&
      grid[0][i] !== Player.EMPTY
    ) {
      winner = grid[0][i];
      break;
    }
    if (i === 2) {
      if (
        grid[0][0] === grid[1][1] &&
        grid[1][1] === grid[2][2] &&
        grid[0][0] !== Player.EMPTY
      ) {
        winner = grid[0][0];
        break;
      }
      if (
        grid[0][2] === grid[1][1] &&
        grid[1][1] === grid[2][0] &&
        grid[0][2] !== Player.EMPTY
      ) {
        winner = grid[0][2];
        break;
      }
    }
  }
  return winner;
};

export const generateGrid = (x: number, y: number, value: string) => {
  const grid: string[][] = [];
  for (let i = 0; i < x; i++) {
    grid[i] = [];
    for (let j = 0; j < y; j++) {
      grid[i][j] = value;
    }
  }
  return grid;
};
