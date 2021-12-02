import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmployeePage from './components/EmployeePage'
import HomePage from './components/HomePage'
import { Card } from 'react-bootstrap';
import {Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store'


class App extends Component {
  constructor(){
    super()
    this.state={
      searchedText : ''
    }
  }

  //TODO: Transfert {searchedText} to Redux (and so {filtredEmployees})
  handleSearch = (searchedText) => {
    this.setState({
      ...this.state,
      searchedText
    })
  }

  render() {
    /* const filtredEmployees = this.state.employees.filter((employee)=>(
      employee.name.toLowerCase().includes(this.state.searchedText.toLowerCase()) ||
      employee.poste.toLowerCase().includes(this.state.searchedText.toLowerCase()) ||
      employee.phone.toLowerCase().includes(this.state.searchedText.toLowerCase()) || 
      employee.email.toLowerCase().includes(this.state.searchedText.toLowerCase())
    ))   */
    return (
      <Provider store={store}>
        <Router>
          <Card className="App borderless">
            <Switch>
              <Route  path="/employee/:idEmployee">
                <EmployeePage />
              </Route>
              <Route exact path="/">
                <HomePage handleSearch={this.handleSearch} />
              </Route>
            </Switch>
          </Card>
        </Router>
      </Provider>
     
    )
  }
}

export default App
