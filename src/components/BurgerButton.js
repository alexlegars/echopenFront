
import React from 'react';


export default class BurgerButton extends React.Component {
    constructor(props) {
        super(props)

        this.data = this.props.data;
    }

    componentDidMount() {
    }
    componentWillReceiveProps(nextProps)
    {
        if(this.props.data == false && this.props.data !== nextProps.data){
            this.refs.burger.classList.add('active');
        } else {
            this.refs.burger.classList.remove('active');
        }
        return false;
    }

    render() {

        return (
            <div className="burger" ref={"burger"} >
                <span className="burger-icon"/>
            </div>
        )
    }
}