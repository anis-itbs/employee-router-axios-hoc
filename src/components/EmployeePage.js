import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import { getEmployees } from '../js/actions/employeesActions'

function EmployeePage({employees}) {
    let {idEmployee} = useParams()
    let employee = employees.find( employee => employee.id == idEmployee)

    console.log(idEmployee)
    console.log(employees)
    console.log(employee)
    return (
        <Card>
            <Header parent={'EmployeePage'}/>
            {!employee ? 
                <ListGroupItem className="employeeHeaderContainer borderless">Veillez selectionner un element</ListGroupItem> 

                :
            
            <ListGroup id="employeeContainer">
                <ListGroupItem className="employeeHeaderContainer unselect">
                <img alt="Employee pic" 
                    src={`${process.env.PUBLIC_URL}/assets/img/${employee.img}`} 
                    className="employeeAvatar" />
                <div className="employeeTextContainer">
                    <div className="employeeName">{employee.name}</div>
                    <div className="employeePoste">{employee.poste}</div> 
                </div>
                </ListGroupItem>

                <ListGroupItem className="employeePageItem unselect">
                    <div className="employeeName">Email</div>
                    <div className="employeePoste">{employee.email}</div> 
                </ListGroupItem>

                <ListGroupItem className="employeePageItem unselect">
                    <div className="employeeName">Phone</div>
                    <div className="employeePoste">{employee.phone}</div> 
                </ListGroupItem>
            </ListGroup>
            
            
            
            
            }
            
        </Card>
    )
}

const mapStateToProps = state => ({
    employees : state.employees.employeeList
})

export default connect(mapStateToProps, {getEmployees})(EmployeePage)
