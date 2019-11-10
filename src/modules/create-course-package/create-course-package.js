import React from 'react';
import { FormInput, Header, Button } from './components';
import { createCoursePackage } from './clients';
import './create-course-package.scss';

class CreateCoursePackage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            number_of_months: 0,
            price: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (key) => (value) => {
        this.setState({
            [key]: value,
        });
    }

    validateState = () => !this.state.name || !this.state['number_of_months'] || !this.state.price

    submitForm = async() => {
        const response = await createCoursePackage(this.state);
        console.log(response)
    }

    render() {
        return (
            <div className="create-course-package">
                <Header children='Create Course Package' />
                <FormInput type="text" placeholder="Name" handleChange={this.handleChange('name')} />
                <FormInput type="number" placeholder="Number of Months" handleChange={this.handleChange('number_of_months')} />
                <FormInput type="number" placeholder="Price" handleChange={this.handleChange('price')} />
                <Button disabled={this.validateState()} onSubmit={this.submitForm} />
            </div>
        )
    }
}

export default CreateCoursePackage