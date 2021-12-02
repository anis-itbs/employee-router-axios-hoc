import React from 'react'

import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

import EmployeeItem from './EmployeeItem'
import SearchBar from './SearchBar'

function EmployeeList({employees,handleSearch}) {
   
    return (
        <div id="homeContentent">
            <SearchBar handleSearch={handleSearch}  />
            <ListGroup>
                {employees.map((employee)=>( 
                        <EmployeeItem 
                            key={employee.id} 
                            employee={employee} 
                        />
                ))}
            </ListGroup>
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    employees : state.employees.employeeList
})

export default connect(mapStateToProps)(EmployeeList)
