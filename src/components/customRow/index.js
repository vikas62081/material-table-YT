import React, { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { MTableBodyRow } from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomRow = (props) => {
 const [show,setShow]=useState(false)
    const overlayStyle = { width: "100%", position: "absolute" }
    
    return <Grid style={{ display: "contents" }} 
    onMouseOver={()=>setShow(true)}
    onMouseLeave={()=>setShow(false)}
    >
        {show&&<Grid align="right" style={overlayStyle}>

            <Grid sm={2} align="center" style={{ background: "#ffffff" }}>
                <IconButton title="Download" onClick={()=>alert(props.data.name)}>
                    <GetAppIcon />
                </IconButton>
                <IconButton title="Delete" onClick={()=>props.handleDelete(props.index)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>}
        <MTableBodyRow {...props} />
    </Grid>

}

export default CustomRow