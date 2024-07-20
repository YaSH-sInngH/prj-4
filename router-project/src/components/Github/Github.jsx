import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/YaSH-sInngH')
        .then(response => response.json())
        .then(data => {
                console.log(data);
                setData(data) 
            })
    }, [])
  return (
    <div className='text-center m-4 p-2 bg-orange-600 text-white text-2xl'>Github followers: {data.followers}</div>
  )
}

export default Github