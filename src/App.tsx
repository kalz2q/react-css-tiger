import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="ear"></div>
        {/* <div className="ear" style="--right: 0"></div> */}
        <div className="ear" ></div>
        <div className="face">
          {/* <div className="eye" style="--left: 20%"></div> */}
          <div className="eye"></div>

          {/* <div className="eye" style="--right: 20%"></div> */}
          <div className="around-mouth"></div>
          <div className="nose">
            <div className="mouth"></div>
          </div>
          {/* <div className="beard" style="--left: 15%"></div> */}
          {/* <div className="beard" style="--right: 15%; --rotate: -1"></div> */}
          <div className="top-pattern"></div>
          <div className="side-pattern"></div>
          {/* <div className="side-pattern" style="--right: 0; --rotate: -1"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
