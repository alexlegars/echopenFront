import React from 'react';

import ContactForm from "../components/ContactForm";
import BlockFirst from "../components/BlockFirst";
import Temoignage from '../components/Temoignage';
import Header from '../components/Header';
import $ from 'jquery';
import { I18n } from 'react-i18nify'
import translationsFr from '../translations/fr.json'
import translationsEn from '../translations/en.json'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'fr',
        };
        this.isMenuOpen = this.isMenuOpen.bind(this);
            I18n.setTranslations({
                en: translationsEn,
                fr: translationsFr
            });
    }

    isMenuOpen(state) {
        if (state.isOpened = !state.isOpened) {
            this.setState({isOpened: state.isOpen});
        }
    }

    componentDidMount() {
        if (this.props.match.params.locale && this.state.locale !== this.props.match.params.locale) {
            this.setState({
                locale: this.props.match.params.locale,
            });
            I18n.setLocale(this.state.locale)
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
                <Header/>
                <BlockFirst ref="first"/>
                <Temoignage/>
                <ContactForm ref="form"/>
            </div>
        )
    }

}
