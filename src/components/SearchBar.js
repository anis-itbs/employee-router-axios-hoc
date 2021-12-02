import React, { Component } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText : ''
        }
    }

    handleInput(event){
        this.setState({
            ...this.state,
            searchText : event.target.value
        },()=>{this.props.handleSearch(this.state.searchText)})
        
    }

    render() {
        return (
            <InputGroup id="searchInputContainer">
                <FormControl
                    placeholder="Search key words"  
                    id="searchInput" 
                    value={this.state.searchText}
                    onChange={(event)=>{this.handleInput(event)}} />
            </InputGroup>
        )
    }
}

export default SearchBar
