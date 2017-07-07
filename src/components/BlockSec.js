import React from 'react';
import '../css/block2.css';
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
                    <h4 className="will-animate">Concept</h4>
                    <h5>Concept</h5>
                    <SliderConcept/>
                </div>

                <div className="block__2-first history will-animate">
                    <h4 className=" will-animate">History</h4>
                    <h5>Histoire</h5>
                    <div className="block__2-container">
                        <div className="block__2-wrapper-r">
                            <div className="left">
                                <div className="left-container will-animate">
                                    <h3>After bringing together a core team of 5 people with essential expertise for the project, we tested the feasibility (state of the art, applications etc.).
                                        We then mobilized other profiles and partners to create an operational community based on 9 specific challenges we identified that cover the entire project.<br/>
                                        As each participant has various interests and capacities of engagement and expertise, we co-created a project schedule in accordance with these different elements. Using a wiki, which assembles all information (technical, processes, supports, etc.), and online collaboration tools. Some key partners brought resources such as finance, equipment, working spaces, etc. to support the effort and to reach project goals.
                                    </h3>
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-container will-animate">
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