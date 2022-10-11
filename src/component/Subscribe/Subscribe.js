import React from "react";
import './Subscribe.css';
import {Button, Form, Col, Row} from 'react-bootstrap';
const Subscribe = ()=>{
    return(
        <section className="subscribe">
            <div className="container">
                <div className="row">
                    <div class="col-md-12">
                        <h2>Hurry up! Subscribe our newsletter<br/> and get 25% Off</h2>
                        <p>Limited time offer for this month. No credit card required.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <form>
                    
                        <Row className="align-items-center">
                                <Col>
                                <Form.Control id="inlineFormInput" placeholder="Email Address Here" size="lg" />
                                </Col>
                                <Col xs="auto">
                                <Button variant="primary" size="lg">Subscribe</Button>{' '}
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe;