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
    //console.log(tab);
    /*tab = tab.map((row: number[], i: number): number[] => {
        if(i === 0 || i === 1){return row;}
        else{return row.slice(0, -1).map((x: number, j: number): number =>{
            //console.log(-1 * (determinant({m: [[tab[i-2][0], tab[i-2][j]], [tab[i-1][0], tab[i-1][j]]]}) / tab[i-1][0]));
            return (-1 * (determinant({m: [[tab[i-2][0], tab[i-2][j+1]], [tab[i-1][0], tab[i-1][j+1]]]}) / tab[i-1][0]) || 0);
        })}
    });*/
    console.log(tab);
    return tab;
}
