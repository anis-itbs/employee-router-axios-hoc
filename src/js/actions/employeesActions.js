import { GET_EMPLOYEES, ADD_EMPLOYEE } from './types'
import { v4 as uuid } from 'uuid';

import axios from 'axios'

export const getEmployees = () => (dispatch) => {

    console.log("getEmployees")
    
    axios
        .get('http://localhost:5000/employees')
        .then(res => {
            console.log(res)
            dispatch({
                type : GET_EMPLOYEES,
                payload : res.data
            })
        })
}

export const addEmployee = employee => dispatch => {
    const newEmployee = {
        id: uuid(),
        ...employee
    }

    axios
        .post('http://localhost:5000/employees',newEmployee)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            })
        })
}