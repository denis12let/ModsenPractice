import { useState } from 'react';

export const InputNumber = () => {
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const getMessage = () => {
    const num = parseFloat(number);
    if (isNaN(num)) {
      return '';
    }
    if (num > 0) return 'Число больше нуля';
    else if (num < 0) return 'Число меньше нуля';
    else return 'Число равно нулю';
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} placeholder="Введите число" />
      <Message message={getMessage()} />
    </div>
  );
};

const Message = ({ message }) => {
  return <p>{message}</p>;
};
