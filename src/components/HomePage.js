import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getEmployees } from '../js/actions/employeesActions';
import LoadingSpinner from './HOC/LoadingSpinner';
import { Card } from 'react-bootstrap';
import EmployeeList from './EmployeeList'
import Header from './Header'

//get the returned component from LoadingSpinner
const EmployeeListWithLoading = LoadingSpinner(EmployeeList) 


export class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : true
        }
    }

    componentDidMount(){
        this.props.getEmployees()
        setTimeout(()=> this.setState({
            ...this.state,
            isLoading : false
        }), 3000);
      }
    

    render() {
        return (
            <Card>
                <Header parent={'HomePage'} />
                <EmployeeListWithLoading isLoading={this.state.isLoading}  handleSearch={this.props.handleSearch}  />
            </Card>
        )
    }
}

export default connect(null,{getEmployees})(HomePage)