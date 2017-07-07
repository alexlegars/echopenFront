import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Translate }  from 'react-i18nify';

export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: false,
            arrow:false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        arrow:false,
                        infinite: false,
                        speed: 500
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrow:false,
                        infinite: false,
                        speed: 500
                    }
                }
            ]
        };
        return (
            <Slider className="slider__ will-animate" {...settings}>
                    <div className="single__temoignage">
                        <div className="single__header">
                            <img src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/470/2015/10/23122001/CommonMan.jpg" alt=""/>
                            <div className="single__infos">
                                <h3><Translate value="resources.testimony.1.name"/></h3>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <p><Translate value="resources.testimony.1.content"/></p>
                    </div>
                    <div className="single__temoignage">
                        <div className="single__header">
                            <img src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/470/2015/10/23122001/CommonMan.jpg" alt=""/>
                            <div className="single__infos">
                                <h3><Translate value="resources.testimony.2.name"/></h3>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <p><Translate value="resources.testimony.2.content"/></p>
                    </div>
                    <div className="single__temoignage">
                        <div className="single__header">
                            <img src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/470/2015/10/23122001/CommonMan.jpg" alt=""/>
                            <div className="single__infos">
                                <h3><Translate value="resources.testimony.3.name"/></h3>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <p><Translate value="resources.testimony.3.content"/></p>
                    </div>
                    <div className="single__temoignage">
                        <div className="single__header">
                            <img src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/470/2015/10/23122001/CommonMan.jpg" alt=""/>
                            <div className="single__infos">
                                <h3><Translate value="resources.testimony.4.name"/></h3>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <p><Translate value="resources.testimony.4.content"/></p>
                    </div>

            </Slider>
        );
    }
}