import React from 'react';
import GlobalStyle from './style'
import Header from '../header';
import List from '../list';


function App() {
    return (
      <div className="app">
        <GlobalStyle />
        <Header />
        <List></List>
      </div>  
    );
  
}

export default App;
