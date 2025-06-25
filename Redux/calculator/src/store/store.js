import { createStore } from 'redux';
import calculatorReducer from './reducers/calculatorReducers';

const store = createStore(calculatorReducer);

export default store;
