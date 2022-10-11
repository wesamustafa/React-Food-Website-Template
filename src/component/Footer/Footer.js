import React from "react";
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
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
                {/* copyright */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <span>&copy;2022. Foodera. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;