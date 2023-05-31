export enum Player {
  X = "X",
  O = "O",
  EMPTY = " "
}

export interface CellTocProps {
  value: string;

  coords: { x: number; y: number };
}
