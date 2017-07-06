import React from 'react';
import {TweenMax} from 'gsap';


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

    open() {
        var open = !this.state.open;
        if (open) {
            TweenMax.to(this.refs.routeManager, 0.2, {
                opacity : 0
            });
        }
        this.setState({
            open : open
        }, () => {
            if (!open) {
                TweenMax.to(this.refs.routeManager, 0.2, {
                    opacity : 1,
                    delay : 0.5
                });
            }
        });
    }

    close() {
        this.setState({
            open : false
        }, () => {
            TweenMax.to(this.refs.routeManager, 0.2, {
                opacity : 1,
                delay : 0.5
            });
        });
    }


    render() {
        return (
            <div className={"component menu "+(this.state.open?"open":"")}>
                <div className="containerMenu"onMouseEnter={this.open.bind(this)} onMouseLeave={this.close.bind(this)}>
                    <div className="burger">
                        <div className="content">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                    </div>
                    <ul className="links" ref="links">
                        {this.props.children}
                      <div className="clr"/>
                    </ul>
                </div>
                <div className={"routeManager "+this.state.color} ref="routeManager">
                    {this.state.route}
                </div>
            </div>
        );
    }
}
Menu.COLORS = {
    WHITE : 'white',
    BLACK : 'black'
};