import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import 'fontsource-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Menu from './components/menu';
import Routes from './routes/routes';

const queryCache = new QueryCache();

const THEME = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <MuiThemeProvider theme={THEME}>
        <Menu />

        <Routes />
      </MuiThemeProvider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
