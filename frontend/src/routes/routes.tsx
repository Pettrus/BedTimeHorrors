import React, { useState } from 'react';
import AudioPlayer from '../components/audio-player';
import AudioPlayerContext from '../context/audio-player-context';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home/home.component';

const Routes = () => {
    const [audioSrc, setAudioSrc] = useState('');

    return (
        <AudioPlayerContext.Provider value={{ audioSrc, setAudioSrc }}>
          <main>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </main>

          <footer>
            <AudioPlayer />
          </footer>
        </AudioPlayerContext.Provider>
    );
};

export default Routes;
