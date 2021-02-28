function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "_";
  }

  console.log(firstNonRepeatingCharacter('bacabaabacaba')) //there are no repeating chars - returns "_"
  console.log(firstNonRepeatingCharacter('abacabad')) //returns "c"