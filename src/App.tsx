import { ReactElement } from 'react';

import './App.css';
import { Login } from 'pages';

export const App = (): ReactElement => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};
