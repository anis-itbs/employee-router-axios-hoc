import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EmployeeListItem({employee}) {
    return (
        <Link className="stylelessLink" to={`/employee/${employee.id}`}>
            <ListGroup.Item 
                className="employeeItemContainer" >
                <img alt="Employee profil pic" src={`${process.env.PUBLIC_URL}/assets/img/${employee.img}`} className="itemAvatar" />
                <div className="itemTextContainer">
                    <div className="itemName">{employee.name}</div>
                    <div className="itemPoste">{employee.poste}</div> 
                </div>
                
                
            </ListGroup.Item>
        </Link>
    )
}

export default EmployeeListItem
