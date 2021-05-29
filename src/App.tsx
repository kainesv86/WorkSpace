import NavBar from "./components/navbar";
import Home from "./pages/home";

import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
        return (
                <React.Fragment>
                        <NavBar />
                        <Switch>
                                <Route path="/locations">
                                        <h1>Hello</h1>
                                </Route>
                                <Route path="/">
                                        <Home />
                                </Route>
                        </Switch>
                </React.Fragment>
        );
}

export default App;
