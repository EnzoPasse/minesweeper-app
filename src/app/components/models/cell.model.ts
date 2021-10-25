
export class Cell {
    status: 'close' | 'open' | 'flag' = 'close';
    mine = false;
    areaMines: number = 0
    constructor(public row: number, public column: number) { }
}


// son los 9 espacios alrededor de una celda en particular
export const AREA = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0], //  la celda en cuestion
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]

]