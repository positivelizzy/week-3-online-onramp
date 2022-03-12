function transpose(arr) {
       let arr=[];
        for(let i=0;i<matrix.length;i++){
            arr.push([])
            for(let j=0;j<matrix.length;j++){
                arr[i].push(matrix[j][i])
            }
        }
        return arr
    }
}

module.exports = transpose
