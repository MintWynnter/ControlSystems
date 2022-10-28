import {variable} from "../interfaces/variable"

export function add(v1: variable, v2:variable): variable{
    const ncoef: number = v1.coef + v2.coef;
    const nadd: number = v1.add + v2.add;
    const newvar: variable = {sym: v1.sym, coef: ncoef, add: nadd};
    return newvar;
}