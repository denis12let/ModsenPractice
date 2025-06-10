const sum = (num) => {
  const numbers = String(num).split('');
  return +numbers[0] + +numbers.at(-1);
};

console.log(sum(123124124124));
