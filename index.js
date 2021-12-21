const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
   return tutorials.map(title =>
     title.split(' ').map(word =>
       word[0].toUpperCase() + word.substring(1)).join(' '))
}

console.log(titleCased(tutorials))



// TALK IT OUT
// new array
// iterate through each string
// split strings to individual words
// iterate through each word and update the first letter of each word to capital
// join each word back together to form full string
// return array