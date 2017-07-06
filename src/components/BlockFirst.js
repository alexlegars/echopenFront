import React from 'react';
import '../css/block1.css'
import { Translate } from 'react-i18nify';

export default class BlockFirst extends React.Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div className="block__1">
                <div className="block__1-first">
                    <div className="left">
                        <h2><Translate value="resources.key"/></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="right">
                        <img src="" alt=""/>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>

                <div className="block__1-second">
                    <div className="left">
                        <img src="" alt=""/>
                    </div>
                    <div className="right">
                        <h2>Titre en <span>H2</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>

                <div className="block__1-first">
                    <div className="left">
                        <h2>Titre en <span>H2</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="right">
                        <img src="" alt=""/>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>

                <div className="block__1-second">
                    <div className="left">
                        <img src="" alt=""/>
                    </div>
                    <div className="right">
                        <h2>Titre en <span>H2</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>


            </div>
        )
    }
}