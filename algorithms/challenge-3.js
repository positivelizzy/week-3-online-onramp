function binaryReversal(value) {
    bi = parseInt(value).toString(2)
    bi = bi.padStart(8, '0').split("").reverse().join("")
    return parseInt(bi, 2).toString()
}
module.exports = binaryReversal

console.log(binaryReversal('5'))
console.log(binaryReversal('47'))
console.log(binaryReversal('213'))