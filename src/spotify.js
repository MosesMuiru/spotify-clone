// endpoint is where we send the user to

// for authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/"
// clientid

const clientId = "1aa0d25b60744fa791c82d07439dcb65"

// scopes--- things the spotify clone will do
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
]
// gettinf the access token from response or url
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial;
    }, {})
}

// makinga the login url

export const loginurl =  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`