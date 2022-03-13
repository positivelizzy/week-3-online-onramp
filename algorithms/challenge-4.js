function listSorting(needle, haystack) {
    if(typeof(haystack[0]) !== 'object'){
        return haystack.lastIndexOf(needle)
    }
    for(i= haystack.length-1; i>=0; i--){
        if(haystack[i].lastIndexOf(needle) > -1){
            return [i, haystack[i].lastIndexOf(needle)]
        }
    }
    return -1
}

console.log(listSorting(5, [1, 2, 3, 4, 5]))
console.log(listSorting(5,[
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ]))
module.exports = listSorting
