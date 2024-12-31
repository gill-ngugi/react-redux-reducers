import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Counter App</h1>
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;

