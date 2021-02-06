import React from 'react'
import { Avatar, Grid } from '@material-ui/core';

const NameCustomComponent = ({name}) => {

    return <Grid container alignItems="center">
        <Grid item sm={3}>
            <Avatar style={{ backgroundColor: "green" }}>{name[0]}</Avatar>
        </Grid>
        <Grid item>
            {name}
        </Grid>
    </Grid>
}

export default NameCustomComponent