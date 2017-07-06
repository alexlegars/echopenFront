import React from 'react';
import ContactForm from "../components/ContactForm";
import BlockFirst from "../components/BlockFirst";
import SineWaves from 'sine-waves/sine-waves.min'
import SimpleSlider from '../components/SimpleSlider';
import Temoignage from '../components/Temoignage';
import Header from '../components/Header';
import $ from 'jquery';

export default class HomePage extends React.Component {
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
                    }

                });


                requestAnimationFrame(parallaxElements);
            }

            requestAnimationFrame(parallaxElements);
        });
        return (
            <div>
                <Header/>
                <ContactForm/>
                <BlockFirst/>
                <Temoignage/>
            </div>

        )
    }
}