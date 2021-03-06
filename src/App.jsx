import { Route, Redirect, Switch } from "react-router-dom";
import { HomeIn } from "./pages/Hani/Home";
import { HomeOut } from "./pages/Manar/HomeOut";
import{Login} from "./pages/Fathi/Login/index.jsx"
import{SignUp} from "./pages/Fathi/  signup/index"
import { Movies } from './pages/Hani/Movies/index';
import { TvShows } from './pages/Hani/TvShows/index';
import { TermsOfUse } from "./pages/Hani/TermsOfUse";
import { ProtectedRoute } from "./components/Fathi/protectedroute/index";



export const App = () => {
  return (
    <>
        <Switch>
        <ProtectedRoute path="/homein">
          <HomeIn />
        </ProtectedRoute>

        <ProtectedRoute path="/movies">
          <Movies />
        </ProtectedRoute>

        <ProtectedRoute path="/tvshows">
          <TvShows />
        </ProtectedRoute>

        <Route path="/terms">
          <TermsOfUse />
        </Route>
        
        <Route path="/homeout">
          <HomeOut />
        </Route>

        <Route path="/login">
          <Login/>
        </Route> 
        <Route path="/signup">
          <SignUp/>
        </Route>

        <ProtectedRoute path="/">
          <Redirect to="/homein" />
        </ProtectedRoute>

        

        </Switch>
    </>
  );
};
