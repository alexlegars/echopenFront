import React from 'react';
import '../css/header.css';
import $ from 'jquery';
import SineWaves from 'sine-waves/sine-waves.min';


export default class Temoignage extends React.Component {
    constructor() {
        super();

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

            var waves = new SineWaves({
                el: document.getElementById('waves'),

                speed: 4,

                width: function() {
                    return $(window).width();
                },

                height: function() {
                    return $(window).height();
                },

                ease: 'SineInOut',

                wavesWidth: '110%',

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
                        amplitude: -250,
                        wavelength: 250
                    }
                ],

                // Called on window resize
                resizeEvent: function() {
                    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
                    gradient.addColorStop(0,"rgba(255, 255, 255, 0.2)");
                    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.2)");
                    gradient.addColorStop(1,"rgba(255, 255, 255, 0.2)");

                    var index = -1;
                    var length = this.waves.length;
                    while(++index < length){
                        this.waves[index].strokeStyle = gradient;
                    }

                    // Clean Up
                    index = void 0;
                    length = void 0;
                    gradient = void 0;
                }
            });
        });

        return(
            <div className="header">
                <canvas id="waves"></canvas>
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
                <img src="assets/img/menu.png" alt="" className="menu_btn"/>
            </div>
        )
    }
}