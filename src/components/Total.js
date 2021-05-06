import React, { Component } from 'react'

class Total extends Component {
    render(){

        const {totalFoods} = this.props
        // calculate total here (think of reduce)
        
        
        for (let i = 0 ; i < totalFoods.length ; i++) {
            for (let j = 0 ; j < totalFoods.length ; j++) {
                if (totalFoods[i][j].name === totalFoods[i][j].name) {
                    totalFoods.pop(totalFoods[i][j])
                }
            }
        }

        let result = totalFoods.reduce((acc, food) => {
            return acc + food.calories * food.quantity
        }, 0)


        return(
            <div>
                <h2>Today's food list</h2>
                {
                    totalFoods.map((food, index) => {
                            return(
                                <ul>
                                    <li key={index} >
                                        {food.name}: {food.calories} x {food.quantity} = {food.calories * food.quantity}
                                    </li>
                                </ul>
                            )

                    })
                }
                <h4>Total: {result}</h4>
            </div>
        )
    }
}

export default Total