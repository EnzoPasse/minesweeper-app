import { AREA, Cell } from "../cell/cell.model"

export class Board {
    cells: Cell[][] = [];

    constructor(size: number, mines: number) {
        for (let y = 0; y < size; y++) {
            this.cells[y] = [];
            for (let x = 0; x < size; x++) {
                this.cells[y][x] = new Cell(y,x);
            }

        }

        this.plantMines(mines);
        this.countMinesArround(size);
    }

    private plantMines(mines: number): void {
        for (let i = 0; i < mines; i++) {
            this.getCelltoMine().mine = true;
        }
    }

    private getCelltoMine(): Cell {
        const y = Math.floor(Math.random() * this.cells.length);
        const x = Math.floor(Math.random() * this.cells[y].length);
        return this.cells[y][x];
    }

    private countMinesArround(size: number){
   // recorro todo el tablero y en por cada posicion voy a preguntar por su area.
      for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
              
            let minesArround = 0;
              
             for (const item of AREA) {
                 // que exista la celda y si tiene una mina la cuento.
                 if(this.cells [y+item[0]] && this.cells[x+item[1]] && this.cells [y+item[0]] [x+item[1]].mine )  {
                    minesArround ++
                 }
             }
             this.cells[y][x].areaMines = minesArround
             
          }
          
      }
    }
}