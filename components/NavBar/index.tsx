import { useEffect } from "react";

const NavBar = () => {

    useEffect( () => 
        window.addEventListener("scroll", () => {
            const y = window.pageYOffset;
            const title_height = document.getElementById("intro").offsetHeight;
            if(title_height < y) {
                document.getElementById("nav-bar").style.position = "fixed";
                document.getElementById("nav-bar").style.top = "0px";
            } else {
                document.getElementById("nav-bar").style.position = "absolute";
                document.getElementById("nav-bar").style.top = "100vh";
            }
        })
    )

    return(
        <div id='nav-bar'>
            <a className="nav-link" href='#skills'>What I Do</a>
            <a className="nav-link" href='#about'>About</a>
            <a className="nav-link" href='#projects'>Projects</a>
            <a className="nav-link" href='#contact'>Contact</a>
        </div>
    )
}

export default NavBar;