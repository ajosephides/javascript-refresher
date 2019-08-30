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
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
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
