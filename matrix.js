function multiplication(matrix1, matrix2) {
    let m1Row = matrix1.length
    let m1Col = matrix1[0].length
    let m2Row = matrix2.length
    let m2Col = matrix2[0].length
    let resMatrix = new Array(m1Row)
    if (m1Col !== m2Row) throw new Error('column of matrix1 does not match the row of matrix2')
    else {
        for (let i = 0; i < m1Row; i++) {
            resMatrix[i] = new Array(m2Col)
            for (let j = 0; j < m2Col; j++) {
                resMatrix[i][j] = 0
                for (let k = 0; k < m1Col; k++) {
                    resMatrix[i][j] += matrix1[i][k] * matrix2[k][j]
                }
            }

        }
        return resMatrix
    }
}
console.log(multiplication(
    [
        [1, 2],
        [3, 4],
        [5, 6],

    ], [
        [1, 0, 4],
        [4, 0, 1]
    ]
));