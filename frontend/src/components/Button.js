import React from 'react'

import { Button } from 'react-bootstrap'

const Buttonn = (props) => {
    return (
        <Button variant="primary" type = { props.type } onClick={ props.onClick} style ={{marginBottom:"100px"}}  >  { props.value } </Button>   

    )
}

export default Buttonn
