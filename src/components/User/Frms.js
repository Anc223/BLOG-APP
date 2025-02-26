import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Frms() {

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:4000/viewallusers')
            .then((res) => {
                setData(res.data)

            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    console.log(data);
    

    return (
        
        <div>
            <p>users</p>
            <p1>{data.msg}</p1>
        </div>
           
    )
}

export default Frms