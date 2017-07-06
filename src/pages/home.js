import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import ContactForm from "../components/ContactForm";
import BlockSec from "../components/BlockSec";
import SimpleSlider from '../components/SimpleSlider';
import Temoignage from '../components/Temoignage';
import Header from '../components/Header';
import $ from 'jquery';
import scrollToComponent from 'react-scroll-to-component';
import Is from '../bundles/is'
import {TweenMax} from 'gsap';
import BurgerButton from "../components/BurgerButton";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            statement: null,
            mobile: null
        };
        this.isMenuOpen = this.isMenuOpen.bind(this);

    }


    isMenuOpen(state) {
        if (state.isOpened = !state.isOpened) {
            this.setState({isOpened: state.isOpen});
        }
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
                <Menu right customCrossIcon={false} burgerBarClassName={ "burger-icon" } burgerButtonClassName={ "burger" } customBurgerIcon={<BurgerButton data={this.state.isOpened}/> } onStateChange={ this.isMenuOpen } width={Is.mobile ? '100%' : '50%' }>
                    <div id="home" className="menu-item" onClick={() => scrollToComponent(this.refs.slider, {
                        offset: 0,
                        align: 'top',
                        duration: 1500
                    })}>Home
                    </div>
                    <div id="about" className="menu-item" onClick={() => scrollToComponent(this.refs.form, {
                        offset: 0,
                        align: 'top',
                        duration: 1500
                    })}>About
                    </div>
                    <div id="contact" className="menu-item" onClick={() => scrollToComponent(this.refs.slider, {
                        offset: 0,
                        align: 'top',
                        duration: 1500
                    })}>Contact
                    </div>
                </Menu>
                <Header/>
                {/*<SimpleSlider ref="slider"/>*/}
                <BlockSec ref="first"/>
                <Temoignage/>
                <ContactForm ref="form"/>
            </div>
        )
    }

}
