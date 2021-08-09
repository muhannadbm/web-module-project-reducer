import React from 'react';
import './App.css';
import {reducer, initialState} from './reducers/index'

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import {MemoryReset, Totalset , addOne,ClearDisplay, applyNumber,ChangeOperation,Memoryset} from './actions/index'

function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);
const eventhandler = (num) => {
dispatch(applyNumber(num))
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            {state.total}
            <div className="row">
              <CalcButton value={"M+"} onClick={()=> dispatch(Memoryset())}/>
              <CalcButton value={"MR"} onClick={()=> dispatch(Totalset())}/>
              <CalcButton value={"MC"} onClick={()=> dispatch(MemoryReset())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> eventhandler(1)} />
              <CalcButton value={2} onClick={()=> eventhandler(2)} />
              <CalcButton value={3} onClick={()=> eventhandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> eventhandler(4)} />
              <CalcButton value={5} onClick={()=> eventhandler(5)} />
              <CalcButton value={6} onClick={()=> eventhandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> eventhandler(7)} />
              <CalcButton value={8} onClick={()=> eventhandler(8)} />
              <CalcButton value={9} onClick={()=> eventhandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>dispatch(ChangeOperation('+'))}/>
              <CalcButton value={"*"} onClick={()=>dispatch(ChangeOperation('*'))}/>
              <CalcButton value={"-"} onClick={()=>dispatch(ChangeOperation('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>dispatch(ClearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
