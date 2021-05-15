import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './components/Menu';
import Home from './pages/Home';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
      <ChakraProvider>
        <Router>
                <Menu />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>
      </ChakraProvider>
  );
}

export default App;
