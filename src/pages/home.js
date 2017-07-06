import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import ContactForm from "../components/ContactForm";
import BlockFirst from "../components/BlockFirst";
import SimpleSlider from '../components/SimpleSlider';
import scrollToComponent from 'react-scroll-to-component';
import Is from '../bundles/is'
import {TweenMax} from 'gsap';
import AnimationCanvas from "../components/AnimationCanvas";
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
        if(state.isOpened = !state.isOpened) {
            this.setState({isOpened: state.isOpen}) ;
        }
    }





    render() {

        return (
            <div>
                <Menu right customCrossIcon={false}  burgerBarClassName={ "burger-icon" }  burgerButtonClassName={ "burger" } customBurgerIcon={ <BurgerButton data={this.state.isOpened}/> }  onStateChange={ this.isMenuOpen }  width={Is.mobile  ?'100%':'50%' } >
                    <div id="home" className="menu-item"  onClick={() => scrollToComponent(this.refs.slider, { offset: 0, align: 'top', duration: 1500})}>Home</div>
                    <div id="about" className="menu-item" onClick={() => scrollToComponent(this.refs.form, { offset: 0, align: 'top', duration: 1500})}>About</div>
                    <div id="contact" className="menu-item" onClick={() => scrollToComponent(this.refs.slider, { offset: 0, align: 'top', duration: 1500})}>Contact</div>
                </Menu>
                <AnimationCanvas/>
                <SimpleSlider ref="slider"/>
                <ContactForm ref="form"/>
                <BlockFirst ref="first"/>
            </div>

        )
    }
}