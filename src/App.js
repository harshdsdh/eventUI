import React from 'react';
import NavArea from './NavArea'
import Content from './content'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <div className='wrapper'>
      <NavArea className='navarea'/>
      <Content className='content'/>
      <Footer className='footer'/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
