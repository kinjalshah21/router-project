import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    
    const {id} = useParams()
    return (
       <div className='flex justify-center'>
        <div className='text-center text-2xl text-white mt-14 mb-20 bg-orange-700 max-w-lg rounded-lg p-6'>Id : {id} <br />
       <h1 >This page doesn't exists.</h1>
       <h1 >Please check your URL again.</h1>
       </div>
       </div>
    )
}

export default User