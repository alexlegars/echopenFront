import React from 'react';
import '../css/header.css';
import $ from 'jquery';
import AnimationCanvas from "./AnimationCanvas";
import { Translate }  from 'react-i18nify';

export default class Temoignage extends React.Component {
    constructor() {
        super();
        this.state = {
            waves: [
                {
                    timeModifier: 4,
                    lineWidth: 1,
                    amplitude: -25,
                    wavelength: 25
                },
                {
                    timeModifier: 2,
                    lineWidth: 2,
                    amplitude: -50,
                    wavelength: 50
                },
                {
                    timeModifier: 1,
                    lineWidth: 1,
                    amplitude: -100,
                    wavelength: 100
                },
                {
                    timeModifier: 0.5,
                    lineWidth: 1,
                    amplitude: -200,
                    wavelength: 200
                },
                {
                    timeModifier: 0.25,
                    lineWidth: 2,
                    amplitude: -170,
                    wavelength: 170
                }
            ]
        };
        this.parallaxElements = this.parallaxElements.bind(this);
    }


    parallaxElements() {
        $(".will-animate, .wa, .case-item").each(function (i, v) {

            var scrollTop = $(window).scrollTop(),
                el = $(this),
                elHeight = el.height(),
                winHeight = $(window).height(),
                offsetTop = el.offset().top + parseInt(el.css("padding-top")),// + winHeight * app.delta
                bottomScreen = scrollTop + winHeight;

            if (bottomScreen >= offsetTop) {
                el.addClass("animate");
            }

        });
        requestAnimationFrame(this.parallaxElements);
    }


    componentDidMount() {
        requestAnimationFrame(this.parallaxElements);
    }
    render() {

        return(
            <div className="header">
                <AnimationCanvas waves={this.state.waves}/>

                <img src="assets/img/logoBlanc.png" alt="" className="mini-logo"/>
                <div className="socials">
                    <div className="social-single">
                        <a href="https://www.facebook.com/groups/echopen/">
                            <img src="assets/img/fb.png" alt=""/>
                        </a>
                    </div>
                    <div className="social-single">
                        <a href="https://twitter.com/echopenorg">
                            <img src="assets/img/teter.png" alt=""/>
                        </a>
                    </div>
                    <div className="social-single">
                        <a href="https://github.com/echopen">
                            <img src="assets/img/github.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="langs">
                        <p className="langs__">
                            <a href="/fr">
                                Fr
                            </a>
                        </p>
                        <p className="langs__">
                            <a href="/en">
                                En
                            </a>
                        </p>
                </div>
                <div className="header-content">
                    <img src="assets/img/logoBlanc.png" alt="" className="logo will-animate"/>
                    <h2 className="will-animate"><Translate value="resources.landing.title"/></h2>
                    <p className=" will-animate"><Translate value="resources.landing.content"/></p>
                </div>
            </div>
        )
    }
}