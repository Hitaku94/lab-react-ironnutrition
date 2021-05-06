import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import FoodDetail from './foodDetail'
import AddForm from './AddForm'
import Search from './Search'


class FoodBox extends Component {

/*
props will look like :
this.props = {
    food: array
    onSubmit: function
}
*/

state = {
    showForm: false
}


handleShowForm = () => {
    this.setState({
        showForm: true
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    const { title, calories, image } = e.target
    let newFood = {
        title: title.value,
        calories: calories.value,
        image: image.value
    }

    this.setState({
        showForm: false
    }, () => {
        this.props.onAdd(newFood)
    })
}


    render(){

        const {foods, onSearch, onTotal} = this.props
        const {showForm} =this.state

        return(
            
        <div>
            <h2>Food list</h2>
            <Search onSearch={onSearch}/>
            {
                showForm ? 
                <AddForm onSubmit={this.handleSubmit} style={{padding: 20}} /> : 
                <Button onClick={this.handleShowForm} variant="contained" color="primary">Show Form</Button>
            }
            {
                foods.map((food, index) => {
                    return (
                    <FoodDetail key={index} 
                    onTotal={onTotal}
                    food={food} />
                    )
                })
            }
        </div>
            
        )
    }
}

export default FoodBox