import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos.js';
import NuevoProducto from './components/NuevoProducto.js';
import EditarProducto from './components/EditarProducto.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header  />

      <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
