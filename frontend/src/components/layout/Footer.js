import React from 'react'
import "../styles/Footer.css";
import { FaFacebookF, FaGithub , FaEnvelope} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer-wrapper">
				<div className="footer-options">
					<div className="footer-logo">
						<a href="/">
							<img src="https://user-images.githubusercontent.com/36301481/104619223-a0b0ad00-56b3-11eb-84ce-9b845b1729b5.png" alt="footer"/>
						</a>
					</div>
				</div>
					
				<div className="about">
						<h4>About Us</h4>
						<div className="description">
							<h7>HackStation provides a platform to share your work in number. </h7>
							<br></br>
							<br></br>
							<button className="dark">SUBSCRIBE</button>{' '}
						</div>
				</div>

				<div className="contact">
					<h4>Contact Us</h4>
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
			
	)
}

export default Footer;