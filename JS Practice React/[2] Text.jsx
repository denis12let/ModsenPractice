import { useState } from 'react';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus numquam voluptatum in saepe. Excepturi asperiores corporis deserunt ducimus laudantium necessitatibus vero maiores, corrupti quos rem ad perspiciatis eveniet dignissimos.';

export const Text = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>{isOpen ? text : text.slice(0, text.indexOf('.') + 1)}</p>
      <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Показать подробнее' : 'Скрыть'}</button>
    </div>
  );
};
