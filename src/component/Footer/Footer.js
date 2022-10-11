import React from "react";
import './Footer.css';
import {Nav, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = ()=>{

    return(
        <section className="footer">
            <div className="container">
                    {/* links */}
                <div className="row">
                    <div className="col-md-12">
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                        <Nav.Link href="/home">register</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-1">Forum</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2">Affiliate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-3">FAQ</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                    <Button variant="link"><FontAwesomeIcon icon={faFacebookF} size="lg" /></Button>
                    <Button variant="link"><FontAwesomeIcon icon={faTwitter} size="lg" /></Button>
                    <Button variant="link"><FontAwesomeIcon icon={faYoutube} size="lg" /></Button>
                    <Button variant="link"><FontAwesomeIcon icon={faGlobe} size="lg" /></Button>
                    <Button variant="link"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></Button>
                    <Button variant="link"><FontAwesomeIcon icon={faInstagram} size="lg" /></Button>
                    <br/>
                    </div>
                </div>
                {/* copyright */}
                <div className="row text-center">
                    <div className="col-md-12">
                        <span>&copy;2022. Foodera. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;