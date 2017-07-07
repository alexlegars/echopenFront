import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Translate }  from 'react-i18nify';

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
                            <h2 className=" will-animate"><Translate value="resources.people.medical.title"/></h2>
                            <div className="left-container  will-animate">
                                <h3><Translate value="resources.people.medical.content"/>
                                </h3>
                                <div className="bottom-part will-animate">
                                    <p className="bottom-title"><Translate value="resources.people.medical.title"/></p>
                                    <hr className="hr-1"/>
                                    <p className="bottom-number">01</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container  will-animate">
                                <img className="will-animate" src="assets/img/illuu1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2 className=" will-animate"><Translate value="resources.people.firefighter.title"/></h2>
                            <div className="left-container will-animate">
                                <h3 className=" will-animate"><Translate value="resources.people.firefighter.content"/>
                                </h3>
                                <div className="bottom-part  will-animate">
                                    <p className="bottom-title"><Translate value="resources.people.firefighter.title"/></p>
                                    <hr className="hr-2"/>
                                    <p className="bottom-number">02</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container will-animate">
                                <img className=" will-animate" src="assets/img/illuu2.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2 className=" will-animate"><Translate value="resources.people.common.title"/></h2>
                            <div className="left-container will-animate">
                                <h3 className=" will-animate"><Translate value="resources.people.firefighter.content"/>
                                </h3>
                                <div className="bottom-part will-animate">
                                    <p className="bottom-title"><Translate value="resources.people.firefighter.title"/></p>
                                    <hr className="hr-3"/>
                                    <p className="bottom-number">03</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container will-animate">
                                <img className=" will-animate" src="assets/img/illu3.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block__2-wrapper-r">
                        <div className="left">
                            <h2 className=" will-animate"><Translate value="resources.app.title"/></h2>
                            <div className="left-container will-animate">
                                <h3 className=" will-animate"><Translate value="resources.app.content"/>
                                </h3>
                                <div className="bottom-part will-animate">
                                    <p className="bottom-title"><Translate value="resources.app.title"/></p>
                                    <hr className="hr-4"/>
                                    <p className="bottom-number">04</p>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-container will-animate">
                                <img className=" will-animate" src="assets/img/illu4.png" alt=""/>
                            </div>
                        </div>
                    </div>
            </Slider>
        );
    }
}