import React from 'react';
import '../css/newsletter.css';
import { Translate }  from 'react-i18nify';

export default class Newsletter extends React.Component {
    constructor() {
        super();

        this.state = {
            characters: 0
        };

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="newsletter" id="block2">

                <div className="newsletter-first history will-animate">
                    <div className="newsletter-container">
                            <img className="illu" src="assets/img/newsillu.png" alt=""/>
                            <h2><Translate value="resources.newsletter"/></h2>
                            <form className="form" onSubmit={this._handleSubmit}>
                                <input type="email"  ref={c => this._email = c} placeholder="Your e-mail" />
                                <button type="submit" className="btn btn-primary">-</button>
                            </form>
                    </div>
                </div>
            </div>

        )
    }


    _handleSubmit(event) {
        event.preventDefault();
        // this._email.value = '';
        console.log("get email");
    }
}
