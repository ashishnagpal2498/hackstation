import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
	<Router>
		<div className="App">
			<Navbar/>
		</div>
	</Router>
    
  );
}

export default App;
