import React from 'react';
import "../styles/Introduction.css";


const Introduction = () => {
  return(
    <div>
    <h1 className="Introduction"> We provide 21st century coding contests for developers</h1>
    <h3 className= "intro-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nesciunt odit corporis cumque expedita! Reprehenderit autem quam earum expedita hic vero.</h3>
    <button className="get_started">Get Started</button>
    <div className="img">
    <img src="https://shotstash.com/wp-content/uploads/2018/11/computer-notepad-1100x733.jpg" width="1340" height="400" alt="hackstation-img" />
    </div>
    </div>
  )
}

export default Introduction;
