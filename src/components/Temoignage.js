import React from 'react';
import '../css/temoignage.css'
import SimpleSlider from '../components/SimpleSlider';



export default class Temoignage extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="block__temoignage will-animate">
                <h2 className="will-animate">Testimony</h2>
                <div className="temoignage_container">
                    <div className="left">
                    </div>
                    <div className="right">
                    </div>
                    <div className="clear"></div>
                    <SimpleSlider/>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}