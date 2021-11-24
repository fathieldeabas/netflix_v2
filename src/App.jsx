import { Route, Redirect, Switch } from "react-router-dom";
import { HomeIn } from "./pages/Hani/Home";
import { HomeOut } from "./pages/Manar/HomeOut";
// import{Login} from "./pages/Fathi/Login/index.jsx"
import { Movies } from './pages/Hani/Movies/index';
import { TvShows } from './pages/Hani/TvShows/index';
import { TermsOfUse } from "./pages/Hani/TermsOfUse";


export const App = () => {
  return (
    <>
        <Switch>
        <Route path="/homein">
          <HomeIn />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/tvshows">
          <TvShows />
        </Route>

        <Route path="/terms">
          <TermsOfUse />
        </Route>
        
        <Route path="/homeout">
          <HomeOut />
        </Route>

        <Route path="/">
          <Redirect to="/homein" />
        </Route>

        {/* <Route path="/login">
          <Login/>
        </Route> */}

        </Switch>
    </>
  );
};
