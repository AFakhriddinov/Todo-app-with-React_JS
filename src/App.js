import React from 'react';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';

export default function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}
