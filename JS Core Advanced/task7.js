const handleError = (a, b) => {
  try {
    if (b === 0) {
      throw 'Error: Второе число равно 0';
    }

    console.log(`Второе число равно ${b}`);
  } catch (error) {
    console.log(error);
  }
};

handleError(0, 2);
handleError(1, 0);
handleError(0, 3);
