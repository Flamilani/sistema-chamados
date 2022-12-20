import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    )
}