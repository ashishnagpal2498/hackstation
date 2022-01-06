import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Cards from './components/layout/Cards';
import SignUp from './components/layout/SignUp';
import Charts from './components/layout/Charts';
import About from './components/layout/About';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Cards />
						<Charts />
					</Route>
					<Route path="/signup" component={SignUp} />
					<Route path="/about" component={About} />
				</Switch>
				<Footer />
			</div>

		</Router>

	);
}

export default App;
