import React from 'react';
import Stats from "../components/Stats"
import ContactForm from "../components/ContactForm";
import BlockSec from "../components/BlockSec";
import Temoignage from '../components/Temoignage';
import Header from '../components/Header';
import $ from 'jquery';
import scrollToComponent from 'react-scroll-to-component';
import Menu from "../components/Menu";
import { I18n } from 'react-i18nify'
import Newsletter from "../components/Newsletter";
import translationsEn from '../translations/fr.json'
import translationsFr from '../translations/en.json'
import { Translate }  from 'react-i18nify';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: 'fr'
        };

        I18n.setTranslations({
            en: translationsEn,
            fr: translationsFr
        });
        this.parallaxElements = this.parallaxElements.bind(this);
    }

    componentDidMount() {
        scrollToComponent(this.refs.header, { offset: 0, align: 'top', duration: 1500});
        requestAnimationFrame(this.parallaxElements);
        if (this.props.match.params.locale && this.state.locale !== this.props.match.params.locale) {
            this.setState({
                locale: this.props.match.params.locale,
            });
            I18n.setLocale(this.state.locale)
        }
    }
    onClick(link) {
        scrollToComponent(link , { offset: 0, align: 'top', duration: 1500});
        this.refs.menu.toogleOpen();
    }
    parallaxElements() {
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
        requestAnimationFrame(this.parallaxElements);
    }



    render() {

        return (
            <div>
                <Menu ref="menu">
                    <li id="accueil" className="menu-item"  onClick={this.onClick.bind(this, this.refs.header)}><Translate value="resources.menu.un"/></li>
                    <li id="concept" className="menu-item" onClick={this.onClick.bind(this, this.refs.first)}>Concept</li>
                    <li id="contact" className="menu-item" onClick={this.onClick.bind(this, this.refs.contact)}>Contact</li>

                </Menu>
                <Header ref="header"/>
                <BlockSec ref="first"/>
                <Stats/>
                <Temoignage ref="temoignage"/>
                <Newsletter ref="contact"/>
                <ContactForm ref="form"/>
            </div>
        )
    }

}
