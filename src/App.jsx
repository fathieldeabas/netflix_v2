import { Route, Redirect, Switch } from "react-router-dom";
import { HomeIn } from "./pages/Hani/Home";
import { HomeOut } from "./pages/Manar/HomeOut";
import{Login} from "./pages/Fathi/Login/index.jsx"


export const App = () => {
  return (
    <>
        <Switch>
        <Route path="/homein">
          <HomeIn />
        </Route>
        
        <Route path="/homeout">
          <HomeOut />
        </Route>

        <Route path="/">
          <Redirect to="/homein" />
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        </Switch>
    </>
  );
};
