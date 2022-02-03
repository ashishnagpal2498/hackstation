import React, { Fragment } from 'react';
import '../styles/About.css';

const About = () =>
(
	<Fragment>
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
				<img src="https://image.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg" alt="About" />
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
				<p className="meet-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus architecto itaque, est voluptatibus sit id repudiandae sint. Pariatur iste nobis accusantium.</p>
				<ul className="team-card">
					<li><p> Member1 </p>
						<img src="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" alt="Member1" />
					</li>
					<li><p> Member2 </p>
						<img src="https://image.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg" alt="Member2" />
					</li>
					<li><p> Member3 </p>
						<img src="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" alt="Member3" />
					</li>
				</ul>
			</div>
		</div>
	</Fragment>

);

export default About;