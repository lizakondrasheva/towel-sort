
module.exports = function towelSort(matrix) {

    if (undefined === matrix || 0 === matrix.length)
        return [];

    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i] = matrix[i].reverse();
    }
    return [].concat.apply([],matrix);
}
