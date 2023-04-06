import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Header.css";


interface HeaderProps {
    subHeader?: string;
}



const Header = (props:HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <React.Fragment>
    <header className="header">
      <div className="header-label">DEMO Streaming</div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="button-container-inner">
            <span onClick={handleMenuClick} className="close-button">X</span>
            <button className="login-button-inner">Login</button>
            <button className="free-trial-inner">Start your free trial</button>
            <a className="links" onClick={()=>navigate("../")}>Home</a>
            <a className="links" onClick={()=>navigate("./movies")}>Movies</a>
            <a className="links" onClick={()=>navigate("./series")}>Series</a>
        </div> 
      </div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="free-trial">Start your free trial</button>
      </div>
    </header>
    <div className="sub-header">
        <div className="sub-header-label">{props.subHeader}</div>
    </div>
    </React.Fragment>
    

    
  );
}

export default Header;


