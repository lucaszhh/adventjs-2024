/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {

    let headRow, headCol;
    for (let i = 0; i < board.length; i++) {
        const col = board[i].indexOf('@')
        if (col !== -1) {
            headRow = i
            headCol = col
            break
        }
    }

    let newRow = headRow
    let newCol = headCol
    if (mov === 'U') newRow--
    if (mov === 'D') newRow++
    if (mov === 'L') newCol--
    if (mov === 'R') newCol++

    if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length) {
        return 'crash'
    }

    const newPos = board[newRow][newCol];
    if (newPos === 'o') {
        return 'crash'
    } else if (newPos === '*') {
        return 'eat'
    } else {
        return 'none'
    }
}

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    const directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
    const [headRow, headCol] = board.flatMap((row, i) => row.includes('@') ? [[i, row.indexOf('@')]] : [])[0];
    const [dRow, dCol] = directions[mov];
    const [newRow, newCol] = [headRow + dRow, headCol + dCol];

    if (!board[newRow]?.[newCol]) return 'crash';
    return board[newRow][newCol] === 'o' ? 'crash' : board[newRow][newCol] === '*' ? 'eat' : 'none';
}
