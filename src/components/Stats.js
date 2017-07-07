import React from 'react';
import '../css/stats.css';
import $ from 'jquery';
import { Translate }  from 'react-i18nify';

export default class Stats extends React.Component {
    constructor() {
        super();

    }

    render() {

        $(function() {
            var executed = false;
            var oTop = $('#statistics').offset().top - window.innerHeight;
            $(window).scroll(function(){
                var pTop = $('body').scrollTop();
                console.log( pTop + ' - ' + oTop );   //just for your debugging
                if( pTop > oTop + 700 ){
                    if (!executed) {
                        executed = true;
                        launchCounter();
                    }
                }
            });
        });

        function launchCounter() {
            var $el = $(".text-2 span.number"),
                value = 2500;
            var $el2 = $('.text-3 span.number'),
                value2 = 20000;
            var $el3 = $('.text-4 span.number'),
                value3 = 400;
            

            
            $({percentage: 0}).stop(true).animate({percentage: value}, {
                duration : 2000,
                step: function () {
                    // percentage with 1 decimal;
                    var percentageVal = Math.round(this.percentage) ;
                    
                    $el.text(percentageVal + '  ' + '+');
                }
            }).promise().done(function () {
                // hard set the value after animation is done to be
                // sure the value is correct
                $el.text(value + '  ' + '+');
            });

            $({percentage: 0}).stop(true).animate({percentage: value2}, {
                duration : 2000,
                step: function () {
                    // percentage with 1 decimal;
                    var percentageVal = Math.round(this.percentage) ;
                    
                    $el2.text(percentageVal + '  ' + '+');
                }
            }).promise().done(function () {
                // hard set the value after animation is done to be
                // sure the value is correct
                $el2.text(value2 + '  ' + '+');
            });

            $({percentage: 0}).stop(true).animate({percentage: value3}, {
                duration : 2000,
                step: function () {
                    // percentage with 1 decimal;
                    var percentageVal = Math.round(this.percentage) ;
                    
                    $el3.text(percentageVal + '  ' + '+');
                }
            }).promise().done(function () {
                // hard set the value after animation is done to be
                // sure the value is correct
                $el3.text(value3 + '  ' + '+');
            });

        };

        return(
            <div id="statistics" className="stats-container">
                    <ul>
                        <li className="text h1"><h1><Translate value="resources.stats.community"/></h1></li>
                        <li className="text text-1"><span><span className="number">1</span><br/><Translate value="resources.stats.prototype"/></span></li>
                        <li className="text text-2"><span><span className="number">0+</span><br/><Translate value="resources.stats.events"/></span></li>
                        <li className="text text-3"><span><span className="number">0+</span><br/><Translate value="resources.stats.hours"/></span></li>
                        <li className="text text-4"><span><span className="number">0+</span><br/><Translate value="resources.stats.members"/></span></li>
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
                        <div className="shadow-6"></div>
                        <div className="shadow-7"></div>
                        <div className="shadow-8"></div>
                        <div className="shadow-9"></div>
                        <div className="shadow-10"></div>
                        <div className="shadow-11"></div>
                        <div className="shadow-12"></div>
                        <div className="shadow-13"></div>
                    </div>
            </div>
        );
    }
}