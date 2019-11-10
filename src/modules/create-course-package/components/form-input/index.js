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
            isDirty: false
        }
    }

    render() {
        return (
            <input
                className="input"
                placeholder={this.props.placeholder}
                type={this.props.type}
                onChange={(e) => this.props.handleChange(e.target.value)}
            />
        )
    }
}

export default FormInput