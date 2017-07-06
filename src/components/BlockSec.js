import React from 'react';
import '../css/block2.css'
import SliderConcept from '../components/SliderConcept';
/*import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slick from 'slick-carousel/slick/slick.min';*/
import $ from 'jquery';





export default class BlockSec extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="block__2" id="block2">
                <div className="block__2-first">
                    <h4>Concept</h4>
                    <h5>Concept</h5>
                    <SliderConcept/>
                </div>

                <div className="block__2-first history">
                    <h4>Histoire</h4>
                    <h5>Histoire</h5>
                    <div className="block__2-container">
                        <div className="block__2-wrapper-r">
                            <div className="left">
                                <div className="left-container">
                                    <h3>We are hacking ultrasound technology to create an open-science and affordable Echo-stethoscope for all!
                                         We hope that this tool will be in all the pockets of doctors to improve the diagnosis.<br/>
                                        Our application can be for everyone, that can be a doctor, a nurse, you, me, especially you.
                                        Simplicity of use and cost will enable to endow this technology every person in the world.
                                    </h3>
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-container">
                                    <img src="assets/img/history.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}