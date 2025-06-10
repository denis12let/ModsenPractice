'use strict';

const countVowels = (str) =>
  str
    .toLowerCase()
    .split('')
    .filter((letter) => 'aeiyou'.includes(letter)).length;

console.log(countVowels('weygfyukwbfh,seyukgshegisik'));
