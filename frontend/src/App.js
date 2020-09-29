import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

function App() {
  return (
	<Router>
		<div className="App">
			<Navbar/>
			<Footer/>
		</div>
	</Router>
    
  );
}

export default App;
