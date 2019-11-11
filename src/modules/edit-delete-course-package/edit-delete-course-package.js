import React from 'react';
import { getAllCoursePackages, editCoursePackage, deleteCoursePackage } from './clients';
import "./edit-delete-course-package.scss"

class EditDeleteCoursePackage extends React.Component {
    constructor() {
        super()
        this.state = {
            packages: []
        }
    }

    async componentDidMount() {
        const packages = await getAllCoursePackages()
        this.setState({
            packages: packages.data
        });
    }


    renderPackages = () => {
        return (
            <table className="class-packages-table">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Number of Months</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.packages.map(entry =>
                            <tr key={entry.id}>
                                <td><input placeholder={entry.name}/></td>
                                <td><input placeholder={entry.number_of_months} /></td>
                                <td>$<input placeholder={entry.price / 100} /></td>
                                <td><button onClick={() => editCoursePackage(entry.id, this.state[entry.id]) }>Update</button></td>
                                <td><button onClick={() => deleteCoursePackage(entry.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }

    render() {
        if (this.state.packages.length < 1) {
            return (
                <div>No packages! Go create one</div>
            )
        }
        return this.renderPackages()
    }
}

export default EditDeleteCoursePackage