import React from 'react';
import '../css/stats.css';
import $ from 'jquery';

export default class Stats extends React.Component {
    constructor() {
        super();

    }

    render() {

        $(function() {
            var executed = false;
            var oTop = $('#statistics').offset().top - window.innerHeight;
            $(window).scroll(function(e){

                var pTop = $('body').scrollTop();
                console.log( pTop + ' - ' + oTop );   //just for your debugging
                if( pTop > oTop + 700 ){
                    if (!executed) {
                        executed = true;
                        launchCounter();
                    }
                    
                }
                e.preventDefault;
            });
        });

        function launchCounter() {
            console.log('hello');
            var $el = $(".text-2 span.number"),
                value = 800;
            var $el2 = $('.text-3 span.number'),
                value2 = 20000;
            var $el3 = $('.text-4 span.number'),
                value3 = 300;
            

            
            $({percentage: 0}).stop(true).animate({percentage: value}, {
                duration : 2000,
                step: function () {
                    // percentage with 1 decimal;
                    var percentageVal = Math.round(this.percentage) ;
                    
                    $el.text(percentageVal + '+');
                }
            }).promise().done(function () {
                // hard set the value after animation is done to be
                // sure the value is correct
                $el.text(value + '+');
            });

            $({percentage: 0}).stop(true).animate({percentage: value2}, {
                duration : 2000,
                step: function () {
                    // percentage with 1 decimal;
                    var percentageVal = Math.round(this.percentage) ;
                    
                    $el2.text(percentageVal + '+');
                }
            }).promise().done(function () {
                // hard set the value after animation is done to be
                // sure the value is correct
                $el2.text(value2 + '+');
            });

            $({percentage: 0}).stop(true).animate({percentage: value3}, {
                duration : 2000,
                step: function () {
                    // percentage with 1 decimal;
                    var percentageVal = Math.round(this.percentage) ;
                    
                    $el3.text(percentageVal + '+');
                }
            }).promise().done(function () {
                // hard set the value after animation is done to be
                // sure the value is correct
                $el3.text(value3 + '+');
            });

        };

        return(
            <div id="statistics" className="stats-container">
                    <ul>
                        <li className="text h1"><h1>Notre communauté</h1></li>
                        <li className="text text-1"><span><span className="number">1</span><br/>Prototype</span></li>
                        <li className="text text-2"><span><span className="number">0+</span><br/>Participations à des<br/> évènements</span></li>
                        <li className="text text-3"><span><span className="number">0+</span><br/>Hours skill given</span></li>
                        <li className="text text-4"><span><span className="number">0+</span><br/>Membres de la<br/> communautés</span></li>
                    </ul>
                    <div id="wave">
                        <div className="wave-1"></div>
                        <div className="wave-2"></div>
                    </div>

                    <div id="shadow">
                        <div className="shadow-1"></div>
                        <div className="shadow-2"></div>
                        <div className="shadow-3"></div>
                        <div className="shadow-4"></div>
                        <div className="shadow-5"></div>
                    </div>
            </div>
        );
    }
}