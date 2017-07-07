import React from 'react';
import {TweenMax} from 'gsap';
import Is from '../bundles/is'


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            route : '',
            color : Menu.COLORS.WHITE
        };
    }

    componentWillUnmount() {
    }

    toogleOpen() {

        let open = !this.state.open;
        if (Is.mobile) {
            this.refs.links.classList.remove('transparent');
        }
        if (!this.state.open) {
            this.setState({
                open : open
            });
        } else {
            if (Is.mobile) {
                this.refs.links.classList.add('transparent');
            }
            this.setState({
                open : false
            });
        }
        return false;
    }
    open() {
        var open = !this.state.open;
        this.setState({
            open : open
        });
    }

    close() {
        this.setState({
            open : false
        });
    }


    render() {

        return (
            <div className={"component menu "+(this.state.open?"open ":"")+(Is.mobile?"mobile ":"")}>
                <div className="containerMenu" onMouseEnter={!Is.mobile?this.open.bind(this):null} onMouseLeave={!Is.mobile?this.close.bind(this):null}>
                    <div className="burger" onClick={this.toogleOpen.bind(this)} >
                        <div className="content">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                    </div>
                    <ul className="links" ref="links">
                        {this.props.children}
                        <li><a  target="_blank" href="http://documentation.echopen.org/">Documentation</a></li>
                        <li><a target="_blank" href="http://wiki.echopen.org/index.php/Main_Page">Wiki</a></li>
                      <div className="clr"/>
                    </ul>
                </div>

            </div>
        );
    }
}
Menu.COLORS = {
    WHITE : 'white',
    BLACK : 'black'
};