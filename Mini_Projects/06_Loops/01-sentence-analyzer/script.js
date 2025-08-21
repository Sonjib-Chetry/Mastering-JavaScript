// function getVowelCount(sentence) {

//   const lowerSentence = sentence.toLowerCase();
//   const vowels = [];
//   for (let char of lowerSentence) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       vowels.push(char);
//     }
//   }

//   return (vowels.length);
// }



// function getConsonantCount(sentence) {

//   const lowerSentence = sentence.toLowerCase();
//   const consonants = [];

//   for (let char of lowerSentence) {
//     if (
//       char !== " " &&
//       char !== "a" &&
//       char !== "e" &&
//       char !== "i" &&
//       char !== "o" &&
//       char !== "u"
//     ) {
//       consonants.push(char);
//     }
//   }

//   return console.log(consonants.length);
// }


//Alternative:

// function getVowelCount(sentence) {
//   const lowerSentence = sentence.toLowerCase();
//   const vowels = [];

//   for (let i = 0; i <= lowerSentence.length; i++) {
//     let char = lowerSentence[i];
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       vowels.push(char);
//     }
//   }

//   return (vowels.length);
// }


// Alternative

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const nonPunctuation = vowels + consonants + " ";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (!nonPunctuation.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word  Count: ${wordCount}`);