function transpose(arr) {
    let arr_final=[];
    for(let i=0;i<arr[0].length;i++){
        arr_final.push([])
        for(let j=0;j<arr.length;j++){
            arr_final[i].push(arr[j][i])
        }
    }
    return arr_final
}


module.exports = transpose
console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]))
