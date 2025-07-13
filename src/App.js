import React from 'react';
import { IOSGlass } from './components/IOSGlass/IOSGlass';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <IOSGlass blur={28} opacity={0.18}>
        <h2 className="glass-title">iOS Liquid Glass</h2>
        <p className="glass-text">Эффект динамического стекла с анимацией</p>
        <button className="glass-button">Кнопка</button>
      </IOSGlass>
    </div>
  );
}

export default App;