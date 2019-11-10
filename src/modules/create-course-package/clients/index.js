import axios from 'axios';

export const createCoursePackage = async (params) => {
    try {
        const response = axios.post('http://localhost:4000/api/v1/course_packages', params)
        return response
    } catch (e) {
        console.log(e)
    }
}