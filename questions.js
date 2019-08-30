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
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
