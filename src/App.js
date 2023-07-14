import React from 'react';
import { ClassState } from './ClassState.js';
import { UseState } from './UseState.js';

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
