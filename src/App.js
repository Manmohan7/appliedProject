import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routers } from './routes';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router
          basename={`/`}
        >
          <div className="app-container">
            <div className="app-content-container">
              <Routers />
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
