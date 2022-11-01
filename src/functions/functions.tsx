import { copyFileSync } from "fs";
import { NumericLiteral } from "typescript";
import {func} from "../interfaces/func"
import {matrix} from "../interfaces/matrix"
import {determinant} from "./matrix_ops"

//export function f1(bldia: graph)

export function routh_table(cheq: func): number[][]{
    const m: number = cheq.coefs.length;
    let tab: number[][] = [];
    tab = [...tab, cheq.coefs.filter((x: number, i: number): boolean => i%2 === 0)];
    tab = [...tab, cheq.coefs.filter((x: number, i: number): boolean => i%2 === 1)];
    for(let i: number = 2; i < m; i++){
        let r: number[] = [];
        for(let j: number = 0; j < Math.ceil(m/2); j++){
            r = [...r, -1 * (determinant({m: [[tab[i-2][0], tab[i-2][j+1]], [tab[i-1][0], tab[i-1][j+1]]]}) / tab[i-1][0]) || 0];
        }
        tab = [...tab, r];
    }
    console.log(tab);
    return tab;
}
