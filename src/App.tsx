import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
     <ParentComponent Counter={0} />
     <ShoppingCart />
    </div>
  );
}

export default App;
