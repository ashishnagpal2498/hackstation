import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Card from './components/layout/Card';

function App() {
  return (
	<Router>
		<div className="App">
			<Navbar/>
			<Card
				img="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
				title="Contest 1"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos in est aliquam harum esse facilis quae natus. Nesciunt commodi exercitationem cum illo? Recusandae, magni."
				date="11th Feb'21"
				time="7:00 PM"
			/>
			<Footer/>
		</div>
	</Router>
    
  );
}

export default App;
