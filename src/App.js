import React, { Component } from 'react';
import './App.css';
import data from './foods.json';
import {Paper, Grid} from '@material-ui/core';
import FoodBox from './components/FoodBox'
import Total from './components/Total'


class App extends Component {

  state = {
    foods: data,
    filteredFoods: data,
    totalFoods: []
  }

  handleAddFood = (food) => {
    console.log("hey it works")
    this.setState({
      foods: [food, ...this.state.foods]
    })
}

  handleSearch = (e) => {
    let input = e.target.value

    const {foods} = this.state
    let filteredFoods = foods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredFoods
    })
  }

  handleAddTotal = (food, quantity) => {

    let myFood = {...food, quantity}

    this.setState({
      totalFoods: [myFood, ...this.state.totalFoods]
    })
  }



  render(){

    const { filteredFoods } = this.state

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper >
            <h1 className="App">Ingredients list</h1>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6}>
          
            <Paper >
              <FoodBox  onAdd={this.handleAddFood}
                        onSearch={this.handleSearch}
                        onTotal={this.handleAddTotal}
                        foods={filteredFoods} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Total totalFoods={this.state.totalFoods}/>
            </Paper>
          </Grid>
        </Grid>
      
    );
  }
}

export default App;
