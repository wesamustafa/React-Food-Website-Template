import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import {Button} from 'react-bootstrap';
import prideImg from '../../assets/pride.png';
const Home = ()=>{
    return(
        <Fragment>
        <Header/>
        {/* start section number */}
        <section className="numbers">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>1525+</h2>
                    <h6>saving</h6>
                </div>
                <div className="col-md-3">
                    <h2>2588+</h2>
                    <h6>photos</h6>
                </div>
                <div className="col-md-3">
                    <h2>1525+</h2>
                    <h6>rockets</h6>
                </div>
                <div className="col-md-3">
                    <h2>1525+</h2>
                    <h6>globes</h6>
                </div>
            </div>
        </div>
        </section>
        {/* End Section numbers */}
        {/* start section pride */}
        <div className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={prideImg} alt="pride"/>
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <Button variant="primary">order now</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
        {/* end section pride */}
        </Fragment>
    )
}

export default Home;