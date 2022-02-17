const randomNumber = () => Math.floor(Math.random() * 101);

// Crie três funções
const transformStringToUpper = (value) => value.toUpperCase();

const returnFirstLetterOnly = (str) => str.charAt(0);

const concatTwoWords = (strA, strB) => strA.concat(strB);


module.exports = { randomNumber, transformStringToUpper, returnFirstLetterOnly, concatTwoWords };
