import React from 'react';
import './button.scss';

class Button extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <button
                className={this.props.disabled ? "buttonDisabled" : "button"}
                onClick={() => this.props.onSubmit()}
                disabled={this.props.disabled}
                children="Submit"
            />
        )
    }
}


export default Button