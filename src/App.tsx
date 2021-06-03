import NavBar from "./components/navbar";
import Home from "./pages/home";
import Locations from "./pages/locations/";
import Solutions from "./pages/solutions/";
import Order from "./pages/order";
import OrderDone from "./pages/orderDone";
import ComingSoon from "./pages/comingSoon";

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
                                <Route path="/solutions">
                                        <Solutions />
                                </Route>
                                <Route path="/gallery">
                                        <ComingSoon />
                                </Route>
                                <Route path="/aboutus">
                                        <ComingSoon />
                                </Route>
                                <Route path="/order/done">
                                        <OrderDone />
                                </Route>
                                <Route path="/order">
                                        <Order />
                                </Route>
                                <Route path="/">
                                        <Home />
                                </Route>
                        </Switch>
                </React.Fragment>
        );
}

export default App;
