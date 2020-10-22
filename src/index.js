
module.exports = function towelSort (matrix) {
    var matrixArray = [];
    
    if(!matrix || matrix.length === 0){
        return [];
    } else{
        for(var i = 0; i< matrix.length; i++){
            if(i % 2==1 || i === 1){
                matrixArray.push(matrix[i].reverse())
            } else{
                matrixArray.push(matrix[i]);
            }
        }
    }
    return matrixArray.flat();
}
