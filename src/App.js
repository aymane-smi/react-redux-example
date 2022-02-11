import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import {actionCreators} from './state/index';
function App() {
  const counter = useSelector((state)=>state.account);
  const dispatch = useDispatch();
  const {deposit, withdraw} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>deposit(1000)}>desposit</button>
      <button onClick={()=>withdraw(1000)}>withdraw</button>
    </div>
  );
}

export default App;
