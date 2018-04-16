import React, { Component } from 'react';
import AddProject from '../containers/AddProject';
import AddIntern from '../containers/AddIntern';
import Projects from '../containers/Projects';
import Interns from '../containers/Interns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="listMain">
          <AddProject /> 
          <Projects />
        </div>
        <div className="listMain">
          <AddIntern /> 
          <Interns />
        </div>
      </div>
    );
  }
}

export default App;
