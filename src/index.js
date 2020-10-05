// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const result = [];
    if (matrix.length === 0) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            result.push(matrix[i].reverse());
        } else {
            result.push(matrix[i]);
        }
    }
    return result.flat();
};
