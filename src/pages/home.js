import React from 'react';
import ContactForm from "../components/ContactForm";
import BlockSec from "../components/BlockSec";
import SimpleSlider from '../components/SimpleSlider';
import Temoignage from '../components/Temoignage';
import Header from '../components/Header';
import $ from 'jquery';
import scrollToComponent from 'react-scroll-to-component';
import Menu from "../components/Menu";
import BlockFirst from "../components/BlockFirst";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        scrollToComponent(this.refs.header, { offset: 0, align: 'top', duration: 1500})
    }


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
                    <li id="accueil" className="menu-item"  onClick={() => scrollToComponent(this.refs.header, { offset: 0, align: 'top', duration: 1500})}>Accueil</li>
                    <li id="produit" className="menu-item" onClick={() => scrollToComponent(this.refs.slider, { offset: 0, align: 'top', duration: 1500})}>Produit</li>
                    <li id="communaute" className="menu-item" onClick={() => scrollToComponent(this.refs.form, { offset: 0, align: 'top', duration: 1500})}>Communauté</li>
                    <li><a target="_blank" href="http://documentation.echopen.org/">Documentation</a></li>
                    <li><a target="_blank" href="http://wiki.echopen.org/index.php/Main_Page">Wiki</a></li>
                </Menu>

                <Header ref="header"/>
                {/*<SimpleSlider ref="slider"/>*/}
                <BlockFirst ref="slider"/>
                <BlockSec ref="first"/>
                <Temoignage ref="temoignage"/>


                <ContactForm ref="form"/>
            </div>
        )
    }

}
