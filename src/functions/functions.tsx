import {func} from "../interfaces/func"
import {matrix} from "../interfaces/matrix"
import {determinant} from "./matrix_ops"

//export function f1(bldia: graph)

export function routh_table(cheq: func): number[][]{
    const m: number = cheq.coefs.length;
    let tab: number[][] = Array(m).fill(Array(Math.ceil(m/2)).fill(0));
    console.log(tab);

    tab = tab.slice(2).map((row: number[], i: number): number[] => {
        return row.slice(0, -1).map((x: number, j: number): number =>{
            console.log(-1 * (determinant({m: [[tab[i][0], tab[i][j]], [tab[i+1][0], tab[i+1][j]]]}) / tab[i+1][0]));
            return -1 * (determinant({m: [[tab[i][0], tab[i][j]], [tab[i+1][0], tab[i+1][j]]]}) / tab[i+1][0]);
        });
    });
    console.log(tab);
    return tab;
}