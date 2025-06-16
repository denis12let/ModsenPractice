import { useRef, useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Введите текст..." />
      <button onClick={handleButtonClick}>Вывести в консоль</button>
    </div>
  );
};
