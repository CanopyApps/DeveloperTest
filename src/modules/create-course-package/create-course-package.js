import React from 'react';
import { FormInput, Header, Button } from './components';
import './create-course-package.scss';

class CreateCoursePackage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            months: '',
            price: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (key) => (value) => {
        this.setState({
            [key]: value,
        });
    }

    validateState = () => !this.state.name || !this.state.months || !this.state.price

    submitForm = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="create-course-package">
                <Header children='Create Course Package' />
                <FormInput placeholder="Name" handleChange={this.handleChange('name')} />
                <FormInput placeholder="Number of Months" handleChange={this.handleChange('months')} />
                <FormInput placeholder="Price" handleChange={this.handleChange('price')} />
                <Button disabled={this.validateState()} onSubmit={this.submitForm}/>
            </div>
        )
    }
}

export default CreateCoursePackage