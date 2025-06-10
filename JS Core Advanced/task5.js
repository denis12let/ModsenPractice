const firstNonRepEl = (str) => {
  const newStr = str.toLowerCase();

  for (let element of str) {
    if (newStr.indexOf(element) === newStr.lastIndexOf(element)) return element;
  }

  return null;
};

console.log(firstNonRepEl('!cscsdsvsv'));
