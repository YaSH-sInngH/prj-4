import React from 'react'
import { useParams } from 'react-router-dom'
useParams
function User() {
    const {userid} = useParams()
  return (
      <div className='text-center font-bold bg-orange-600 text-white p-4 m-2 text-2xl'>User:{userid} </div>
  )
}

export default User