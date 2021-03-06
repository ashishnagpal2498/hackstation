import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Cards from './components/layout/Cards';
import SignUp from './components/layout/SignUp';
import Charts from './components/layout/Charts';
import Introduction from './components/layout/Introduction';

function App() {
  return (
	<Router>
		<div className="App">
			<Navbar/>
      <Introduction/>
			<Cards/>
			<Charts/>
			<Footer/>
		</div>
	</Router>

  );
}

export default App;
