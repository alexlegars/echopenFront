import React from 'react';
import ContactForm from "../components/ContactForm";
import BlockFirst from "../components/BlockFirst";
import SimpleSlider from '../components/SimpleSlider';
import Temoignage from '../components/Temoignage';
import Header from '../components/Header';
import $ from 'jquery';
import scrollToComponent from 'react-scroll-to-component';
import Menu from "../components/Menu";

export default class HomePage extends React.Component {





    render() {
        $(function () {
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
                <Menu ref="menu">
                    <li id="home" className="menu-item"  onClick={() => scrollToComponent(this.refs.slider, { offset: 0, align: 'top', duration: 1500})}>Accueil</li>
                    <li id="about" className="menu-item" onClick={() => scrollToComponent(this.refs.temoignage, { offset: 0, align: 'top', duration: 1500})}>Produit</li>
                    <li id="contact" className="menu-item" onClick={() => scrollToComponent(this.refs.form, { offset: 0, align: 'top', duration: 1500})}>Communauté</li>
                    <li><a target="_blank" href="http://documentation.echopen.org/">Documentation</a></li>
                    <li><a target="_blank" href="http://wiki.echopen.org/index.php/Main_Page">Wiki</a></li>
                </Menu>

                <Header/>
                {/*<SimpleSlider ref="slider"/>*/}
                <BlockFirst ref="slider"/>
                <Temoignage ref="temoignage"/>
                <ContactForm ref="form"/>
            </div>
        )
    }

}
