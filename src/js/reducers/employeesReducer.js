import { GET_EMPLOYEES, ADD_EMPLOYEE } from '../actions/types'

const initialState = {
    employeeList : []
}

function employeesReducer (state = initialState, action) {
    switch (action.type){
        case GET_EMPLOYEES : 
            return {
                ...state,
                employeeList : action.payload.sort((a,b)=>b-a)
            }
        case ADD_EMPLOYEE : 
            return {
                ...state,
                employeeList : [action.payload, ...state.employeeList]
            }
        default : 
            return state
    }
}

export default employeesReducer