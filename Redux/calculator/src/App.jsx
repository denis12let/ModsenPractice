import { useState } from 'react';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Калькулятор</h1>
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
