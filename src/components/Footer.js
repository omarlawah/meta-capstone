import React from "react";
import logo from "../images/small_logo.png";

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>we are a family owned mediterrenenan restaurant focused  on traditional recipes served with with a moder twist. </p>
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 towncity, USA</li>
                        <li>Phone: <br/>+ 012344578</li>
                        <li>Email: <br/>littlelemon@mail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3> 
                    <ul>
                    <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};


export default Footer;