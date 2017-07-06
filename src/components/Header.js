import React from 'react';
import '../css/header.css';
import $ from 'jquery';
import SineWaves from 'sine-waves/sine-waves.min';
import AnimationCanvas from "./AnimationCanvas";


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
                        <img src="assets/img/fb.png" alt=""/>
                    </div>
                    <div className="social-single">
                        <img src="assets/img/teter.png" alt=""/>
                    </div>
                    <div className="social-single">
                        <img src="assets/img/github.png" alt=""/>
                    </div>
                </div>
                <div className="langs">
                        <p className="active langs__">Fr</p>
                        <p className="langs__">En</p>
                </div>
                <div className="header-content">
                    <img src="assets/img/logoBlanc.png" alt="" className="logo"/>
                    <h2 className="will-animate">Designing an open source and low-cost echo-stethoscope</h2>
                    <p>echOpen is an open and collaborative project and community, led by a multidisciplinary core of experts and senior professionals with the aim of designing a functional low-cost (affordable) and open source echo-stethoscope (ultrasound probe) connected to a smartphone, allowing the radical transformation of diagnostic orientation in hospitals, general medicine and medically underserved areas. This initiate is aimed for health professionals from southern and northern countries.</p>
                </div>
                <img src="assets/img/scroll.png" alt="" className="scroll"/>
            </div>
        )
    }
}