import React from 'react'
import Piechart from '../components/Piechart'
import { useHistory } from 'react-router-dom'
import Buttonn from '../components/Button'

const PieChartPage = () => {
    const history = useHistory()

    const handleClick = (e) => {

        history.push("/")
    
        }
    return (
        <>
            < Buttonn  type="button" value="GO TO PAGE 1" onClick={ handleClick } />
            <Piechart />
        </>
    )
}

export default PieChartPage
