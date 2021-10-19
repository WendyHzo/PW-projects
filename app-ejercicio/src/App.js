import React from 'react';
import './App.css';
import Productitem from './componentes/Productitem';
import GridProduct from './componentes/GridProduct';
import Header from './componentes/Header';
import Productos from './componentes/Productos';



function App() {
  return (   
    <div className Container>
      <Header/>
      <Productos/>
      <GridProduct/>
      <Productitem/>
    </div>
  );
}

export default App;
