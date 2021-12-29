import React from 'react';
import '../styles/About.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function About() {
return (
<Router>
	<div className="about">
		<h1>Welcome to Hackstation</h1>
		<div className="welcome-text">
			<div className="about-text">
				<h1>About Us</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum architecto voluptatibus
					aperiam voluptatem asperiores eius! Modi dolorum itaque fuga error laborum. Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Delectus voluptatem animi vel quam soluta voluptates, magnam hic
					fuga autem neque aspernatur iste maiores recusandae quaerat, numquam quo veritatis illo provident
					voluptas tempore tenetur odio, possimus quasi non? Suscipit, recusandae dolorum. </p>
			</div>	
		</div>	
	

		<div className="our-mission">
			<h1>Our Mission</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsa eveniet, facilis assumenda nisi
				natus enim unde molestiae sit vel numquam, recusandae aspernatur architecto. Commodi velit assumenda
				iure porro dicta, voluptate rem. Voluptatem temporibus voluptatum sed, libero numquam reiciendis optio?
			</p>
		</div>

		<div className="meet-our-team">
			<h1>Meet Our Team</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus architecto itaque, est voluptatibus sit id repudiandae sint. Pariatur iste nobis accusantium.</p>
			<ul className="team-card">
				<li>Member1</li>
				<li>Member2</li>
				<li>Member3</li>
			</ul>
		</div>
	</div>
</Router>

);
}

export default About;