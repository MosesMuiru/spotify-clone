import React, { useEffect } from 'react'
import "./Login.css"

import { BsSpotify } from 'react-icons/bs';
import { getTokenFromUrl, loginurl } from '../spotify';


function Login() {
// run code based on a given condition

    useEffect(()=>{
        const token = getTokenFromUrl()
        console.log("i have a token -- ", token)
    },[])

  return (

    

    <div className='login'>
       

       
        <BsSpotify className='logoo'/> 

        {/* login with spotify  */}
        <a href={loginurl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login