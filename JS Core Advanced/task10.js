const generateRandomNumber = (numOfIterations) => {
  const arrayOfPromises = [];

  for (let i = 0; i < numOfIterations; i++) {
    arrayOfPromises.push(
      new Promise((resolve, reject) => {
        const randomNumber = Math.trunc(Math.random() * 10) + 1;

        setTimeout(() => {
          if (randomNumber <= 5) {
            reject(`Num: ${randomNumber}, Ошибка`);
          } else {
            resolve(`Num: ${randomNumber}, Успешно`);
          }
        }, randomNumber);
      })
    );
  }

  return Promise.allSettled(arrayOfPromises);
};

generateRandomNumber(10).then((results) => {
  results.forEach((result) => {
    console.log(result);
  });
});
