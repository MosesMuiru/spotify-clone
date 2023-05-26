import { useState,useEffect } from 'react'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player'
import { useDataLayerValue } from './DataLayer'

import Login from './components/Login'
import './App.css'

// create a supper instance of the object
const spotify = new SpotifyWebApi()


function App() {
  const [token , setToken ] = useState(null)
//getting the 
const [{}, dispatch] = useDataLayerValue();


  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    // this is the key that will allow you to talk with my react and spotify

    if(_token){ setToken(_token)
      spotify.setAccessToken(_token)
      // this is for getting the user account
      spotify.getMe().then(user => {
        console.log("person")
      })
    
    }
    console.log("i have a token -- ", _token)
},[])

  return (
    <>
     <div>

      {
        token ? <Player/> :     <Login/>
      }


      {/* spotify logo */}
      {/* login with spotify */}
     </div>
    </>
  )
}

export default App
