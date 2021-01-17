import React from 'react'
import "../styles/Footer.css";
import { FaFacebookF, FaGithub , FaEnvelope} from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="container">
				<div className="footer-options">
					<div className="row">
						<div className="col">
							<div className="footer-logo">
								<a href="/">
									<img src="https://user-images.githubusercontent.com/36301481/104619223-a0b0ad00-56b3-11eb-84ce-9b845b1729b5.png" alt="footer"/>
								</a>
							</div>
						</div>
					
						<div className="col">
							<br></br>
							<h4>About Us</h4>
							<br></br>
							<div className="description">
								<h7>HackStation provides a platform to share your work in number. </h7>
								<br></br>
								<br></br>
								<Button variant="dark">SUBSCRIBE</Button>{' '}
							</div>
						</div>

						<div className="col">
							<br></br>
							<h4>Contact Us</h4>
							<br></br>
							<div className="links">
								<ul className="list-unstyled">
									<li>
										<FaGithub size={28}/>
									</li>
									<span></span>
									<li className="list-horizontal-display">
										<FaFacebookF size={28}/>
									</li>
									
									<li className="list-horizontal-display">
										<FaEnvelope size={28}/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;