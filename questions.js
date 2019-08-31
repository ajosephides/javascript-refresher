var selectElementsStartingWithA = function(array) {
  var aWords = array.filter( word => {
    return word[0].toLowerCase() === 'a'
  })
  return aWords;
}

var selectElementsStartingWithVowel = function(array) {
  var vowels = ['a','e','i','o','u']
  var vowelWords = array.filter(word => {
    return vowels.includes(word[0].toLowerCase())
  })
  return vowelWords;
}

var removeNullElements = function(array) {
  var removeNulls = array.filter(element => {
    return element != null;
  })
  return removeNulls;
}

var removeNullAndFalseElements = function(array) {
  var noNullNoFalse = array.filter(element => {
    return (element != null && element != false) || element === 0;
  })
  return noNullNoFalse;
}

var reverseWordsInArray = function(array) {
  var reverseWord = function(word){
    return word.split("").reverse().join("")
  }
  var reverseWordsArray = array.map(word => {
    return reverseWord(word);
  })
  return reverseWordsArray;
}

var everyPossiblePair = function(array) {
  let sorted = array.slice(0).sort();
  let results = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let temp = [sorted[i], sorted[j]];
      results.push(temp);
    }
  }
  return results
}

var allElementsExceptFirstThree = function(array) {
  let result = array.splice(3)
  return result;
}

var addElementToBeginning = function(array, element) {
  array.unshift(element)
  return array;
}

var sortByLastLetter = function(array) {
  let sortedByLast = array.sort((a,b) => {
    if(a[a.length - 1] > b[b.length - 1]){
      return 1
    } else if(a[a.length - 1] < b[b.length - 1]){
      return -1
    } else {
      return 0
    }

  })
  return sortedByLast;
}

var getFirstHalf = function(string) {
  let endIndex = Math.round(string.length / 2)
  return string.slice(0,endIndex);
}

var makeNegative = function(number) {
   return number < 0 ? number : number * -1
}

var numberOfPalindromes = function(array) {
  let counter = 0;
  array.forEach(word => {
    let reverseWord = word.split("").reverse().join("");
    word === reverseWord ? counter +=1 : counter += 0
  })
  return counter;
}

var shortestWord = function(array) {
  let sortedArray = array.sort((a,b) => {
    return a.length - b.length
  })
  return sortedArray[0];
}

var longestWord = function(array) {
  let sortedArray = array.sort((a,b) => {
    return b.length - a.length
  })  
  return sortedArray[0];
}

var sumNumbers = function(array) {
  return array.reduce((acc, val) => {return  acc + val});
}

var repeatElements = function(array) {
  let copyArray = array.slice()
  return array.concat(copyArray);
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  let sum = array.reduce((a,b) => {return a + b})
  return (sum/array.length);
}

var getElementsUntilGreaterThanFive = function(array) {
  let five = array.filter((value, index) => { return index <= 5 })
  return five;
}

var convertArrayToObject = function(array) {
  let object = {}
  for(let i = 0; i < array.length -1; i = i+2){
    object[array[i]] = array[i+1];
  }
  return object;
}

var getAllLetters = function(array) {
  let letters = array.flatMap(word => {
    return word.split("")
  })
  let orderLetters = Array.from(new Set(letters.slice().sort()))
  return orderLetters;
}

var swapKeysAndValues = function(object) {
  let swapObject = {}
  Object.keys(object)
  .map(key =>{
    swapObject[object[key]] = key;
  })  
  return swapObject;
}

var sumKeysAndValues = function(object) {
  let total = Object.keys(object)
  .map( key => {
    return parseInt(key) + parseInt(object[key])
  })
  let finalTotal = total.reduce((a,b) => { return a + parseInt(b) })

  return finalTotal;
}

var removeCapitals = function(string) {
  let isUpperCase = letter => {
    if(letter === ' '){
      return false;
    } else {
      return letter.toUpperCase() === letter ? true : false
    }
  }

  let stripUpper = string.split('')
  .map(letter => {
    return isUpperCase(letter) ? null : letter
  })
  .join('')

  return stripUpper;
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return date.toLocaleDateString();
}

var getDomainName = function(string) {
  let splitString = string.split('@')
  return splitString[splitString.length - 1].split('.com')[0];
}

var titleize = function(string) {
  // console.log(string)
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  // console.log(string)
  return 'Write your method here';
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  let fact = number => {
    if(number === 0){
      return 1;
    } else{
      return number * fact(number - 1);
    }
  }
  return fact(number);
}

var findAnagrams = function(string) {
// think this will fail because of async nature in JS.
  // let anagram = (avail, chosen) =>{
  //   if(avail.length === 0){
  //     return chosen
  //   } else{
  //     for(let i = 0; i < avail.length; i++){
  //       let char = avail.slice(i, i + 1)
  //       let rest = avail.slice(0, i) + avail.slice(i + 1);
  //       anagram(rest, chosen + char)
  //     }
  //   }
  // }
  // let word = anagram(string)

  return 'Write your method here';
}

var convertToCelsius = function(number) {
  let convert =  Math.round((number - 32)*(5/9))
  
  return convert;
}

var letterPosition = function(array) {
  let alphabet = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
  let letterToNumber = array.map(letter =>{
    return alphabet[letter.toLowerCase()]
  })
  return letterToNumber;
}
