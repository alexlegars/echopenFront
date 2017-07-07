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
    }

    componentDidMount() {
        scrollToComponent(this.refs.header, { offset: 0, align: 'top', duration: 1500});
        if (this.props.match.params.locale && this.state.locale !== this.props.match.params.locale) {
            this.setState({
                locale: this.props.match.params.locale,
            });
            I18n.setLocale(this.state.locale)
        }
    }
    onClick(link) {
        scrollToComponent(link , { offset: 0, align: 'top', duration: 1500})
        this.refs.menu.toogleOpen();
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
                    <li id="accueil" className="menu-item"  onClick={this.onClick.bind(this, this.refs.header)}>Accueil</li>
                    <li id="produit" className="menu-item" onClick={this.onClick.bind(this, this.refs.slider)}>Produit</li>
                    <li id="communaute" className="menu-item" onClick={this.onClick.bind(this, this.refs.temoignage)}>Communauté</li>

                </Menu>
                <Header ref="header"/>
                <BlockSec ref="first"/>
                <Stats/>
                <Temoignage ref="temoignage"/>
                <Newsletter/>
                <ContactForm ref="form"/>
            </div>
        )
    }

}
