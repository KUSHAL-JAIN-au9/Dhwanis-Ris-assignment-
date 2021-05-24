import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'

const Piechart = () => {

    const labels1 = ['Under 18 ','Age 18-54', 'Age 55+']
    const backgroundColor1 = ['red', 'green', 'blue']
    const data1 = [2000,4000,2900]

    const datasets1 = [{data : [...data1],backgroundColor:[...backgroundColor1] }]
    
    return (
        <div  className="row" style={{display: 'flex', justifyContent: 'center'}}  >
             <div className="col-md-6 col-md-offset-5" >
         <h1> Age Breakdown Chart</h1>
         <Pie 
         data = {{
             labels :labels1,
             datasets : datasets1
         }}
         options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
       
         /> 
         <br />
         </div>
        </div>
    )
}

export default Piechart
