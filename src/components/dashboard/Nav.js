import React, { useEffect, useState } from "react";
import './navbar.css'
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
           window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_title">
                JobPortal
            </div>
            <div className="nav_menu">
                Menu
            </div> 
        </div>
    )
}

export default Nav
