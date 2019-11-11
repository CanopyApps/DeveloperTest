import React from 'react';
import './form-input.scss';

/**
 * proptypes needed:
 * handlechange
 * PlaceHolder
 * Type
 */

class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isError: false
        }
    }

    render() {
        return (
            <input
                className={this.state.isError ? "input-error" : "input"}
                onChange={(e) => this.props.handleChange(e.target.value)}
                onBlur={(e) => this.setState({
                    isError: Boolean(!e.target.value)
                })}
                placeholder={this.props.placeholder}
                type={this.props.type}
            />
        )
    }
}

export default FormInput