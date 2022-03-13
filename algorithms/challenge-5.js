//DO NOT EDIT THIS OBJECT
//ONLY USE IT IN YOUR CODE TO TRANSLATE
//MORSE SYMBOLS TO REGULAR TEXT
const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
}

Object.freeze(MORSE_CODE)

function morse(text) {
  var sentence = ''
  if(text.indexOf('   ') > -1){
    var words = text.split('   ')
    for(var word in words){
      var word1 = ''
      var wordss = words[word].split(' ')
      for(var letter in wordss){
        word1+= MORSE_CODE[wordss[letter]]
      }
      sentence+=word1+' '
    }
  }else {
    if(text.indexOf(' ')> -1){
      var wordss = text.split(' ')
      word1 = ''
      for(var letter in wordss){
        word1+= MORSE_CODE[wordss[letter]]
      }
      return word1;
    }else {
      return MORSE_CODE[text]
    }
  }
  
  return sentence.trim()
}

console.log(morse("-.. . -.-. .- -.. . ...-   -.. . -.-. .- -.. . ...-   -.. . -.-. .- -.. . ...-"))
console.log(morse('-.. . -.-. .- -.. . ...-') )

module.exports = morse
