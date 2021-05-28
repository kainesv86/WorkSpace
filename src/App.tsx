import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";

import { Route, Switch } from "react-router-dom";

function App() {
        return (
                <div className="App">
                        <NavBar />
                        <Switch>
                                <Route path="/locations">
                                        <h1>Hello</h1>
                                </Route>
                                <Route path="/">
                                        <Home />
                                </Route>
                        </Switch>
                </div>
        );
}

export default App;
