import React from 'react';
import '../css/contact.css'

export default class CommentForm extends React.Component {
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
            <footer>
                <div className="footer--container">
                    <div className="footer--inner">
                        <form className="contact--form" onSubmit={this._handleSubmit}>
                            <h2>Contact us</h2>
                            <div className="form-group">
                                <input className="form-input" type="text" ref={c => this._author = c} placeholder="Name"/>
                                <input className="form-input" type="text" ref={c => this._email = c} placeholder="Email"/>
                            </div>
                            <div className="form-group block">
                        <textarea className="form-input" ref={c => this._body = c} onChange={this._getCharacterCount}
                                  placeholder="Message" rows="3"/>
                            </div>
                            <p>{this.state.characters} caractères.</p>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                        <div className="info--container">
                            <div className="info--container__content">
                                More Hotel Dieu building A1 - 6th floor
                                <br/>
                                1 Parvis Notre-Dame - Pl. Jean-Paul II
                                <br/>
                                75004 Paris, France
                            </div>
                            <div className="info--container__icons">
                                <ul>
                                    <li>Twitter</li>
                                    <li>Facebook</li>
                                    <li>LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer--sub">
                        <h2 ><img src="assets/img/logoBlanc.png" alt=""/></h2>
                        <ul className="links">
                            <li>Wiki</li>
                            <li>Documentation</li>
                            <li>Concept</li>
                            <li>Histoire</li>
                            <li>Communauté</li>
                        </ul>
                        <div className="copyrights">
                            Copyright &copy; 2017, All rights reserved
                        </div>

                    </div>
                </div>

            </footer>

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