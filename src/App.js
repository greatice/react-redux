import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions/index';

function App() {
  const counter = useSelector(function (state) {return state.counter});
  const isLogged = useSelector(state => state.isLogged);
  //useSelector can choose every value from the global state, so can choose the value of counter and isLogged.
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        Counter : {counter}
      </h1>
     { isLogged ? <p>If isLogged is true, please show the info.</p> :' If isLogged is false, please show the info.'}
      <button onClick={()=> dispatch(increment())}>
        +
      </button>
      <button onClick={()=> dispatch(decrement())}>
        -
      </button>
   
    </div>
  );
}

export default App;
