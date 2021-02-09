import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Cards from './components/layout/Cards';

function App() {
  return (
	<Router>
		<div className="App">
			<Navbar/>
			<Cards/>
			<Footer/>
		</div>
	</Router>
    
  );
}

export default App;
