// import './components/fontawesome';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './style.css'

export const Footer = () => {
    return (
        <> 
            <footer className="myfooter">
                <div className="container ">

                    <div className="row">
                        <div className="col-12 icos">
                            {/* <FontAwesomeIcon icon={faCoffee} className=""/> */}
                            <FontAwesomeIcon icon={faYoutube} className="youtube"/>
                            <FontAwesomeIcon icon={faFacebook} className="facebook"/>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <ul className="mylist">
                                <li><NavLink to="/">Audio and Subtitle</NavLink></li>
                                <li><NavLink to="/">Media Center</NavLink></li>
                                <li><NavLink to="/">Privacy</NavLink></li>
                                <li><NavLink to="/">Contact Us</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ul className="mylist">
                            <li><NavLink to="/">Help Center</NavLink></li>
                            <li><NavLink to="/">Jobs</NavLink></li>
                            <li><NavLink to="/"> Cookies and Preferences </NavLink></li>
                        </ul>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ul className="mylist">
                            <li><NavLink to="/" >Gift Cards</NavLink></li>
                            <li><NavLink to="/">Terms of Use</NavLink></li>
                        </ul>
                        </div>
                    </div>

                    <div className="row stamp">
                        <div className="col-sm-12">
                            <span><b>&copy;</b> 1997-2021 Netflix, Inc.</span>
                        </div>
                    </div>

                </div>
        
            </footer>
        </>
    )
}