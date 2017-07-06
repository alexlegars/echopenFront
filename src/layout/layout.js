import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);

    }






    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}