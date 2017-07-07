
import React from 'react';
import SineWaves from 'sine-waves/sine-waves.min'
import $ from 'jquery';

export default class AnimationCanvas extends React.Component {
    constructor() {
        super();
        this.state = {
            originalWaves: [
                {
                    timeModifier: 4,
                    lineWidth: 1,
                    amplitude: -25,
                    wavelength: 25
                },
                {
                    timeModifier: 2,
                    lineWidth: 2,
                    amplitude: -50,
                    wavelength: 50
                },
                {
                    timeModifier: 1,
                    lineWidth: 1,
                    amplitude: -100,
                    wavelength: 100
                },
                {
                    timeModifier: 0.5,
                    lineWidth: 1,
                    amplitude: -200,
                    wavelength: 200
                },
                {
                    timeModifier: 0.25,
                    lineWidth: 2,
                    amplitude: -170,
                    wavelength: 170
                }
            ]
        }

    }
    componentDidMount() {
         this.waves = new SineWaves({
            el: this.refs.waves,

            speed: 4,

            width: function() {
                return $(window).width();
            },

            height: function() {
                return $(window).height();
            },

            ease: 'SineInOut',

            wavesWidth: '80%',

            waves: this.props.waves? this.props.waves : this.state.originalWaves,

            // Called on window resize
             resizeEvent: function() {
                 var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
                 gradient.addColorStop(1,"rgba(255, 255, 255, 0.2)");

                 var index = -1;
                 var length = this.waves.length;
                 while(++index < length){
                     this.waves[index].strokeStyle = gradient;
                 }

                 // Clean Up
                 index = void 0;
                 length = void 0;
                 gradient = void 0;
             }
        });
    }
    componentWillUnmount() {
        this.waves = null;
    }

    render() {
        return (
                <canvas ref={"waves"}/>
        )
    }
}