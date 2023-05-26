export const authEndpont = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "1201b0d55bbb44808ccde3db7a22de9a";


// permissions 
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-top-read",
];

// we need the access token given on the top 
export const getTokenFromUrl = () => {
    // goes to the token splits at & 
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            //#accestotken.... 
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}


// %20 ascii for space  / gives back token 
// when clicked agree redirects back 
export const loginUrl = `${authEndpont}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

