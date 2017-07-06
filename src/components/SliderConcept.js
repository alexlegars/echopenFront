import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'


export default class SliderConcept extends React.Component {
    render() {
        var settings = {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
        };
        return (
            <Slider className="block__2-container concept-slick will-animate" {...settings}>
                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2>Personnel médical</h2>
                            <div className="left-container">
                                <h3>We are hacking ultrasound technology to create an open-science and affordable Echo-stethoscope for all!
                                    <br/> We hope that this tool will be in all the pockets of doctors to improve the diagnosis.
                                </h3>
                                <div className="bottom-part">
                                    <p className="bottom-title">Personnel médical</p>
                                    <hr className="hr-1"/>
                                    <p className="bottom-number">01</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container">
                                <img src="assets/img/illuu1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2>Fireman</h2>
                            <div className="left-container">
                                <h3>Roger is fireman and want to improve the diagnostic of his patient during the travel between an accident and the hospital. Now, he participate to our project using an echo-stethoscope and talking around in his work and with his friend !
                                </h3>
                                <div className="bottom-part">
                                    <p className="bottom-title">Fireman</p>
                                    <hr className="hr-2"/>
                                    <p className="bottom-number">02</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container">
                                <img src="assets/img/illuu2.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2>Personne lambda</h2>
                            <div className="left-container">
                                <h3>Participate to our project is not just using the produce, you can collaborate with us on this project, no matter how !
                                    Your contribution, even the smallest, is important.
                                </h3>
                                <div className="bottom-part">
                                    <p className="bottom-title">Personne lambda</p>
                                    <hr className="hr-3"/>
                                    <p className="bottom-number">03</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container">
                                <img src="assets/img/illu3.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2>App</h2>
                            <div className="left-container">
                                <h3>Our application can be for everyone, that can be a doctor, a nurse, you, me, especially you.
                                    Simplicity of use and cost will enable to endow this technology every person in the world.
                                </h3>
                                <div className="bottom-part">
                                    <p className="bottom-title">App</p>
                                    <hr className="hr-4"/>
                                    <p className="bottom-number">04</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container">
                                <img src="assets/img/illu4.png" alt=""/>
                            </div>
                        </div>
                    </div>
            </Slider>
        );
    }
}