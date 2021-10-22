
export class Cell {
    status: 'open' | 'clear' | 'flag' = 'open';
    mine = false;
    areaMines: number = 0
    constructor(public row: number, public column: number) { }
}

export const AREA = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]

]