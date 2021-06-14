import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:id" component={Detail} />
            </Switch>
        </Router>
    );
}

export default App;