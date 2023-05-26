
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

//super object  // communicate with spotify - react 
const spotify = new SpotifyWebApi();

function App() {
  //short term memory - useState

  // anything to pull put inside the braces below - dispatch is the gun 
  const [{ user, token }, dispatch] = useDataLayerValue();


  // run code based on the given condition , function 
  useEffect(() => {
    // grab the url when the app loads 
    const hash = getTokenFromUrl();

    // removes the token from the url 
    window.location.hash = "";

    // uderscore token is written so that ther will be no confusion in naming 
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      // key to interact between spotify and react 
      spotify.setAccessToken(_token);

      // gets the user details as a promise 
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });


      // yaha auna sakxa hai problem 
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists

        })
      })

      spotify.getPlaylist('3Ols8mMOUzTAbtPmkm7HTa').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })

    }



  }, []);

  // when ever the app loads and the variable changes the code executes 
  // can have multiple variable
  return (
    <div className="app">

      {
        token ? (
          <Player spotify={spotify} />
        ) : (

          <Login />
        )
      }

    </div>
  );
}

export default App;
