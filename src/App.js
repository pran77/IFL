import './App.css';
import React from 'react';
// import Teams from './Teams';
import Players from './Players';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Players />
      </div>
    )
  }
}

export default App;
