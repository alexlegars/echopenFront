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
        }

    }

    render() {
        $(function(){
            function parallaxElements() {

                $(".will-animate, .wa, .case-item").each(function (i, v) {

                    var scrollTop = $(window).scrollTop(),
                        el = $(this),
                        elHeight = el.height(),
                        winHeight = $(window).height(),
                        offsetTop = el.offset().top + parseInt(el.css("padding-top")),// + winHeight * app.delta
                        bottomScreen = scrollTop + winHeight;

                    if (bottomScreen >= offsetTop) {
                        el.addClass("animate");
                        console.log('OFFSET_SET_SET!')
                    }

                });


                requestAnimationFrame(parallaxElements);
            }

            requestAnimationFrame(parallaxElements);


        });

        return(
            <div className="header">
                <AnimationCanvas waves={this.state.waves}/>
                <div className="langs">
                    <div className="fr_lang active">
                        <p>Fr</p>
                    </div>
                    <div className="en_lang">
                        <p>En</p>
                    </div>
                </div>
                <img src="assets/img/logo.png" alt="" className="logo"/>
                <h2 className="will-animate">Designing an open source and<br/> low-cost echo-stethoscope</h2>
                <img src="assets/img/scroll.png" alt="" className="scroll"/>
            </div>
        )
    }
}