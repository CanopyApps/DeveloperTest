import axios from 'axios';


export const getAllCoursePackages = async () => {
    try {
        const response = axios.get('http://localhost:4000/api/v1/course_packages')
        return response
    } catch (e) {
        console.log(e)
    }
}

export const editCoursePackage = async (id, params) => {
    try {
        console.log(id, params)
        // const response = axios.post(`http://localhost:4000/api/v1/course_packages/${params}`, params)
        // return response
    } catch (e) {
        console.log(e)
    }
}

export const deleteCoursePackage = async (params) => {
    try {
        axios.delete(`http://localhost:4000/api/v1/course_packages/${params}`)
        window.location.reload();
    } catch (e) {
        console.log(e)
    }
}