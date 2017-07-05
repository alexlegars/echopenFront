import React from 'react';
import '../css/stats.css';

export default class Stats extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="stats-container">
                <div className="circles-wrapper">
                    <ul>
                        <li className="circle-1"></li>
                        <li className="circle-2"></li>
                        <li className="circle-3"></li>
                    </ul>
              </div>
            </div>
        );
    }


}