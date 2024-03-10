var canConstruct = function (ransomNote, magazine) {
  const ransomNoteFreq = {};
  const magazineFreq = {};

  // Count frequencies of characters in ransomNote
  for (let char of ransomNote) {
    ransomNoteFreq[char] = (ransomNoteFreq[char] || 0) + 1;
  }

  // Count frequencies of characters in magazine
  for (let char of magazine) {
    magazineFreq[char] = (magazineFreq[char] || 0) + 1;
  }

  for (let char in ransomNoteFreq) {
    if (!magazineFreq[char] || magazineFreq[char] < ransomNoteFreq[char]) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("aa", "abab"));
