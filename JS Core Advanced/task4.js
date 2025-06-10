const sumSquare = (arr) => {
  return arr.map((item) => Math.pow(item, 2)).reduce((acc, item) => acc + item);
};

console.log(sumSquare([1, 2, 3, 4, 5, 6, 7, 8, 9]));
