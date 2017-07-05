import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Is from '../bundles/is'
import {TweenMax} from 'gsap';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            mobile: null
        };
        this.isMenuOpen = this.isMenuOpen.bind(this);

    }



    isMenuOpen(state) {
        if(state.isOpen){
            this.refs.burger.classList.add('active');
        } else {
            this.refs.burger.classList.remove('active');
        }
        return state.isOpen;

    }

    toggleMenu() {
        this.setState({isOpened: this.isMenuOpen});


    }



    render() {
        return(
            <div>
                <section className="section section-header">
                    <section className="grid-header container grid-960">
                        <nav className="navbar">
                        </nav>
                    </section>
                </section>
                <div className="burger" ref={"burger"} onClick={this.toggleMenu.bind(this)}>
                    <span className="burger-icon"/>
                </div>
                <Menu right customCrossIcon={false} customBurgerIcon={ false } width={Is.mobile  ?'100%':'50%' } isOpen={this.state.isOpened} onStateChange={ this.isMenuOpen.bind(this) }>
                    <a id="home" className="menu-item" href="#">Home</a>
                    <a id="about" className="menu-item" href="#">About</a>
                    <a id="contact" className="menu-item" href="">Contact</a>
                </Menu>
                {this.props.children}
            </div>
        )
    }
}