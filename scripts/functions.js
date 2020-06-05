"use strict";

// // RANDOM LETTER
// // Returns random letter
// // Takes optional param of letters to exclude in the form of a string i.e. randomLetter("qzx") would return any letter except q, z, or x

function randomLetter(optionalLettersToAvoid) {
  // Empty variable to become array of excluded letters if needed
  var excluded;

  // Full alphabet
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  // If string is provided, split into array and assign to var excluded.
  // Reassign var alphabet to array with excluded characters filtered out.
  if (optionalLettersToAvoid) {
    excluded = optionalLettersToAvoid.split("");
    alphabet = alphabet.split("").filter((char) => !excluded.includes(char));
  }

  // Generate random integer from 0 - length of alphabet (whether original string or filtered array) e.g. length === 26 >>> return 0 - 25
  var randomIndex = Math.floor(Math.random() * alphabet.length);

  // Return character at that index as the random letter
  return alphabet[randomIndex];
}

//

// EXPORTS
export { randomLetter };
