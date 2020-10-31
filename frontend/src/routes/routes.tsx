import React, { useState } from 'react';
import AudioPlayer from '../components/audio-player';
import AudioPlayerContext from '../context/audio-player-context';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './home/home.component';
import Detail from './detail/detail.component';

const Routes = () => {
    const [audioSrc, setAudioSrc] = useState('');

    return (
        <AudioPlayerContext.Provider value={{ audioSrc, setAudioSrc }}>
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/story/:storyId" component={Detail} />
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
