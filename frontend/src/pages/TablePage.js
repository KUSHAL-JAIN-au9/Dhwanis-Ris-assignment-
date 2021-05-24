import React,{ useState, useEffect } from 'react'
import Buttonn from '../components/Button'
import Tables from '../components/tables'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

const TablePage = () => {

    const [users , setUsers] = useState("")

    const history = useHistory()

    useEffect( () => {

        setTimeout(async() => {
            const { data } = await axios.get("http://localhost:6700/allUsers")
            //    console.log(data);
        
               setUsers(data)

           
            
        },6000);

   

     
        
    
    }, [])
    // console.log(users);

    const handleClick = (e) => {

    history.push("/page2")

    }
    return (
        
        <>
        < Buttonn  type="button" value="GO TO PAGE 2" onClick={ handleClick } />
        <Tables users = {users} />
        </>
    )
}

export default TablePage
