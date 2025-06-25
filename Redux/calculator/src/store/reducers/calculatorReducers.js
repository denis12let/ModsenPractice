const initialState = {
  expression: '',
  result: '0',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        expression: state.expression + action.payload,
        result: state.result === '0' ? action.payload : state.result + action.payload,
      };

    case 'ADD_OPERATOR':
      return {
        ...state,
        expression: state.expression + action.payload,
        result: action.payload,
      };

    case 'CALCULATE_RESULT':
      try {
        const calculatedResult = eval(state.expression).toString();
        return {
          ...state,
          result: calculatedResult,
          expression: calculatedResult,
        };
      } catch (error) {
        return {
          ...state,
          result: 'Error',
        };
      }

    case 'CLEAR_CALCULATOR':
      return {
        expression: '',
        result: '0',
      };

    default:
      return state;
  }
};

export default calculatorReducer;
