export const addNumber = (number) => ({
  type: 'ADD_NUMBER',
  payload: number,
});

export const addOperator = (operator) => ({
  type: 'ADD_OPERATOR',
  payload: operator,
});

export const calculateResult = () => ({
  type: 'CALCULATE_RESULT',
});

export const clearCalculator = () => ({
  type: 'CLEAR_CALCULATOR',
});
