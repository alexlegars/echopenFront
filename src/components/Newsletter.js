import React from 'react';
import '../css/newsletter.css'

export default class Newsletter extends React.Component {
    constructor() {
        super();

        this.state = {
            characters: 0
        };

        this._getCharacterCount = this._getCharacterCount.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="newsletter" id="block2">

                <div className="newsletter-first history will-animate">
                    <div className="newsletter-container">
                            <img className="illu" src="assets/img/newsillu.png" alt=""/>
                            <h2>Stay up to Date!</h2>
                            <form className="form">
                                <input type="email" value="" placeholder="Your e-mail" />
                                <button type="submit" className="btn btn-primary">-</button>
                            </form>
                    </div>
                </div>
            </div>

        )
    }

    _getCharacterCount() {
        this.setState({
            characters: this._body.value.length
        })
    }

    _handleSubmit(event) {
        event.preventDefault();
        this._author.value = '';
        this._body.value = '';
        this._email.value = '';
        this.setState({characters: 0});
    }
}
