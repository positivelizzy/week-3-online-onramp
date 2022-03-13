function romanToDecimal(roman) {
    var value  = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    var sum =0;
    var inprocess = ''
    roman = roman.toUpperCase()
    var arr = roman.split('')
    for(var item in arr){
        sum+= value[arr[item]]
      if(inprocess === ''){
           inprocess = value[arr[item]]
           count = 1
       }else if(inprocess !== arr[item]){
            if(inprocess < value[arr[item]]){
                sum-=count * inprocess * 2
                inprocess = value[arr[item]]
                count =1
            }else {
                inprocess = value[arr[item]]
                count=1
            }
       }else {
           count++
       }
    }
    return sum
}
module.exports = romanToDecimal

console.log(romanToDecimal('i') === 1)
console.log(romanToDecimal('II') === 2 )
console.log(romanToDecimal('V') === 5 )
console.log(romanToDecimal('DCC') === 700)
console.log(romanToDecimal('Xlix') === 49)
console.log(romanToDecimal('Xl') === 40)
console.log(romanToDecimal('MMMM') === 4000)
console.log(romanToDecimal('lIX') === 59)
console.log(romanToDecimal('XlVIII') === 48)
console.log(romanToDecimal('Xl') === 40)
console.log(romanToDecimal('CMLV') === 955)
console.log(romanToDecimal('MMMDCCXXII') === 3722)
console.log(romanToDecimal('DCXXV') === 625)
console.log(romanToDecimal('XCIX') === 99)
console.log(romanToDecimal('XXVIII') === 28)
console.log(romanToDecimal('XII') === 12)