// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //



function initialPrompt() {
  let word = input.question("Let's play some Scrabble!\n\nEnter a word to score: ");
  return word;
};


let simpleScore = function(word) {
      return word.length
};

let vowelBonusScore = function(word){
      word = word.toUpperCase();
      let score = 0;
      let vowels = ['A', 'E', 'I', 'O', 'U'];
      let i = 0;
        while (i < word.length) {
          if (vowels.includes(word[i])) {
            score = score + 3 
        }
          else {
            score = score + 1
        }
        i++
    }
    return score;
};

let scrabbleScore = function(word) {
      word = word.toLowerCase();
      let score = 0;
      for (let i = 0; i < word.length; i++){
        score = score + Number(newPointStructure[word[i]]);
    }
    return score;
};






const scoringAlgorithms = [
{
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
}, 
{
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore()
},
{
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore()
}];

let newPointStructure = {};

function transform(object) {
    for (let n in object) {
    for (let i = 0; i < object[n].length; i++) {
      newPointStructure[(object[n][i]).toLowerCase()] = n;
  }
}
};

transform(oldPointStructure);

function scorerPrompt(word) {
  let decision = input.question(`Which scoring algorithm would you like to use?\n
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `)
  return scoringAlgorithms[decision].scoringFunction(word);
}



function runProgram() {
  let answer = initialPrompt();
  return `Score for '${answer}': ${scorerPrompt(answer)}`;
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

