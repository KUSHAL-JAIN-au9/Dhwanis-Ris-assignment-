import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = ( {users} ) => {

    console.log(users[0]);
    return (
     
                <Table striped bordered hover variant="dark" size="lg" className="table"  >
                    <thead className="thead"  >
                        <tr  >
                        <th style={{width :"300px"}} >ID</th>
                        <th style={{width :"300px"}}> Name</th>
                        <th style={{width :"300px"}}>Email</th>
                        <th style={{width :"300px"}}>IsAdmin</th>
                        </tr>
                    </thead>
                    { users.length > 0 && users.map( user =>
                    <tbody key={user._id} >
                        <tr>
                        <td  style={{width :"300px"}}> {user._id} </td>
                        <td style={{width :"300px"}}>{user.name}</td>
                        <td style={{width :"300px"}}>{user.email}</td>
                        <td style={{width :"300px"}}>{(user.isAdmin).toString()}</td>
                       
                        </tr>
                    
                    </tbody>
    )
}
                </Table>
    )
}

export default Tables
