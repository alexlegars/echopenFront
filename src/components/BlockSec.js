import React from 'react';
import '../css/block2.css';
import SliderConcept from '../components/SliderConcept';
import { Translate }  from 'react-i18nify';

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
                    <h4 className=" will-animate"><Translate value="resources.history.title"/></h4>
                    <h5><Translate value="resources.history.title"/></h5>
                    <div className="block__2-container">
                        <div className="block__2-wrapper-r">
                            <div className="left">
                                <div className="left-container will-animate">
                                    <h3><Translate value="resources.history.content"/>.
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