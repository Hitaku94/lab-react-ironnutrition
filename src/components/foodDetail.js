import React, { Component } from 'react'
import {Grid, Typography, ButtonBase, Button, TextField} from '@material-ui/core';

class FoodDetail extends Component {

state = {
  quantity: 0
}

handleChange = (e) => {
  this.setState({
    quantity: e.target.value
  })
}

  render(){

    const {food, onTotal} = this.props

    return(
      <Grid style={{padding: 10}} container spacing={2}>
          <Grid item>
            <ButtonBase >
              <img style={{width: 80}, {height: 80}} src={food.image} alt="food-image"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {food.name}
                </Typography>
                <TextField
                      min={0}
                      onChange={this.handleChange}
                      id="standard-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                      shrink: true,
                      }}
                    />
                <Typography variant="body2" color="textSecondary">
                  {food.calories}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Button onClick={ () => {onTotal(food, this.state.quantity)}} variant="contained" color="primary">
          +
            </Button>
        </Grid>
    )
  }
}    

export default FoodDetail
         
         /*
         
         */