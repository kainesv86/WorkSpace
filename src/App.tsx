import NavBar from "./components/navbar";
import Home from "./pages/home";
import Locations from "./pages/locations";

import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
        return (
                <React.Fragment>
                        <NavBar />
                        <Switch>
                                <Route path="/locations">
                                        <Locations />
                                </Route>
                                <Route path="/">
                                        <Home />
                                </Route>
                        </Switch>
                </React.Fragment>
        );
}

export default App;
