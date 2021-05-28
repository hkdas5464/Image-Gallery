import React from 'react';
import Search from './components/search/Search';

import './App.css';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
    <MuiTheme>
    <div><NavBar/>
    <Search/>
    </div>
    
    </MuiTheme>
   
   <div className="bottom">
     Created by Harendra kr. Das
   </div>
    </div>
  );
}

export default App;
