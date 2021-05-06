import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'

class AddForm extends Component {


/*
the props:
this.props = {
    onSubmit: function
}
*/

    render(){

        const {onSubmit} = this.props

        return(
            <div>
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField name="title" label="Title" />
                <TextField name="calories" label="Calories" />
                <TextField name="image" label="image" />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
              </form>
            </div>
        )
    }
}

export default AddForm