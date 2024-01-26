import React from "react";
import { Link } from "react-router-dom";
import { Link as Linkscroll } from "react-scroll";

export const Header =()=> {

    const handleSetActive = (to) => {
        console.log(to);
      };

    return (
        <header>
            <nav className="accounts">
                <Link to={'/login'}>Zaloguj </Link>
                <Link to={'/register'}>Załóż konto</Link>
            </nav>
            <nav className="scrolls">
            <Linkscroll
                activeClass="active" 
                to="mainsection" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
            >Start</Linkscroll>
              <Linkscroll
                activeClass="active" 
                to="mainsection" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
            >O co chodzi?</Linkscroll>
              <Linkscroll
                activeClass="active" 
                to="mainsection" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
            >O nas</Linkscroll>
              <Linkscroll
                activeClass="active" 
                to="mainsection" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
            >Fundacja i organizacja</Linkscroll>
              <Linkscroll
                activeClass="active" 
                to="mainsection" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
            >Kontakt</Linkscroll>
            </nav>
        </header>
    )
}

