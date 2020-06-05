import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewGame from './pages/NewGame';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/add-game" component={NewGame} />
    </BrowserRouter>
  );
};

export default Routes;
