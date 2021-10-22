import { AREA, Cell } from "../cell/cell.model"

export class Board {
    cells: Cell[][] = [];
    totalCells: number = 0;

    constructor(public size: number, mines: number) {

        this.totalCells = (size * size) - mines

        for (let y = 0; y < size; y++) {
            this.cells[y] = [];
            for (let x = 0; x < size; x++) {
                this.cells[y][x] = new Cell(y, x);
            }

        }

        this.plantMines(mines);
        this.countMinesArround();
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

    private countMinesArround() {
        // recorro todo el tablero y en por cada posicion voy a preguntar por su area.
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {

                let minesArround = 0;

                for (const item of AREA) {
                    // que exista la celda y si tiene una mina la cuento.
                    if (this.cells[y + item[0]] && this.cells[x + item[1]] && this.cells[y + item[0]][x + item[1]].mine) {
                        minesArround++
                    }
                }
                this.cells[y][x].areaMines = minesArround

            }

        }
    }

    private openAllCells():void {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                this.cells[y][x].status = 'open';
                
            }
            
        }
    }

    public checkCell(cell: Cell): 'gameover' | 'win' | null {
        if (cell.status !== 'open') {
            return null;
        }
        if (cell.mine) {
          //  this.openAllCells();
            return 'gameover'
        } else {
            cell.status = 'clear';
            if (this.totalCells-- <= 1)
                return 'win';
        }
        return null;
    }

    public addFlag(cell: Cell): void {
        if (cell.status === 'flag') {
            cell.status = 'open';
        } else {
            cell.status = 'flag';
        }
    }
}