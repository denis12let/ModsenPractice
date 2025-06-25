import { useSelector, useDispatch } from 'react-redux';
import { addNumber, addOperator, calculateResult, clearCalculator } from '../store/actions/calculatorActions';

const Calculator = () => {
  const { result, expression } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNumberClick = (number) => {
    dispatch(addNumber(number));
  };

  const handleOperatorClick = (operator) => {
    dispatch(addOperator(operator));
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };

  const handleClear = () => {
    dispatch(clearCalculator());
  };
  console.log(expression);
  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('0')}>0</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>

        <button onClick={handleCalculate}>=</button>

        <button onClick={() => handleNumberClick('3')}>3</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>

        <button onClick={() => handleNumberClick('6')}>6</button>

        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('9')}>9</button>

        <button onClick={() => handleOperatorClick('/')}>/</button>

        <button onClick={handleClear} className="clear">
          Зачистка
        </button>
      </div>
    </div>
  );
};

export default Calculator;
