import {matrix} from "../interfaces/matrix"

export function determinant(mat: matrix): number{
    const det: number = (mat.m[0][0] * mat.m[1][1] - mat.m[0][1] * mat.m[1][0]);
    return det;
}