import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import {Button, Carousel} from 'react-bootstrap';
import prideImg from '../../assets/pride.png';
import ingredients from '../../assets/ingredients.png';
import Data from "../../Data";
import testimonialsPic01 from "../../assets/testimonials/01.jpg";
import testimonialsPic02 from "../../assets/testimonials/02.jpg";
import testimonialsPic03 from "../../assets/testimonials/03.jpg";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
const Home = ()=>{
    const foodItems = Data.map((item)=>{
        return(
            <div className="col-md-4">
                    <div className="box">
                    <img src={item.img} alt="foodimg"/>
                    <h5>{item.title}</h5>
                    <span className="time">{item.time}</span>
                    <h3><span>{item.price - (item.price * item.discount / 100)}$</span> <span>{item.price}$</span></h3>
                    <Button variant="primary">order now</Button>{' '}
                    </div>
            </div>
        )
    })
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
        <section className="pride">
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
        </section>
        {/* end section pride */}
        {/* start section ingredients */}
        <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>purus a odio finibus bibendum.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                        </ul>
                        <Button variant="primary">learn more</Button>{' '}
                    </div>
                    <div className="col-md-6">
                        <img src={ingredients} alt="ingredients"/>
                    </div>
                </div>
            </div>
        </section>
        {/* end section ingredients */}
        {/* start section paralex */}
        <section className="paralex">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <Button variant="link">Watch Our Story</Button>
                    </div>
                </div>
            </div>
        </section>
        {/* end section paralex */}
        {/* start section foods */}
        <section className="foods">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Explore Our Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {foodItems}
                </div>
            </div>
        </section>
        {/* end section foods */}
        {/* start section slider */}
        <section className="testimonials">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>testimonials</h2>
                </div>
            </div>
            {/* slider */}
            <div className="row">
                <div className="col-lg-12 col-md-12">
                <Carousel>
                    <Carousel.Item>
                        <img
                        src={testimonialsPic01}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                        <h6>Simab Dave - Web Designer</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={testimonialsPic02}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                        <h6>Johnthan Doe - UX Designer</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    src={testimonialsPic03}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <p>
                    "Far far away, behind the word mountains, far from the countries. Vokalia and Consonantia, there live the blind texts. "
                    </p>
                    <h6>Maccy Doe - Front End</h6>
                    
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
       
        </section>
        {/* end section slider */}
        
        {/* start section subscribe */}
        <Subscribe/>
        {/* end section subscribe */}
        {/* start section footer */}
        <Footer/>
        {/* end section footer */}
        </Fragment>
    )
}

export default Home;