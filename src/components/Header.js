import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddEmployee from './AddEmployee'


function Header(props) {
    return (
        <Card.Header id="headerContainer">
            { props.parent==='HomePage' ? 
                <>
                    <div className='headerTitle'>Employee Directory</div> 
                    <AddEmployee />
                </>
                
                : 
                <> 
                    <Link className="backBtn stylelessLink" to={'/'}> &laquo; </Link>
                    <div className='headerTitle'>Emplopyee</div> 
                </>
            }
                
        </Card.Header>
    )
}

export default Header
