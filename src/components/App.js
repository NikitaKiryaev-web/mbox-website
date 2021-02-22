import React from 'react';
import '../index.css';
import {useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";


function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
        title='Night Watch'
        year='2021'
        age='18'
        seasons='9'
        rating='8.8'
        about='Сериал про кулхацкеров'
        />
      </div>
    </div>
  );
}

export default App;
