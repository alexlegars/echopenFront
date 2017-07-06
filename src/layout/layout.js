import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {TweenMax} from 'gsap';
import scrollToComponent from 'react-scroll-to-component';
import Is from '../bundles/is'

import BurgerButton from "../components/BurgerButton";

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpened: false,
            statement: null,
            mobile: null,
        }
    }
    render() {
        return(
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
        )
    }
}