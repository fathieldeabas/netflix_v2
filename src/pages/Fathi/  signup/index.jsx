import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/authcontext";
import { Inputuser } from "../../../components/Fathi/LoginInput/index";
import { FooterSec } from "../../../components/Fathi/FooterSec/index";
import img1 from "../../../files/Images/icon.png";

export const SignUp = () => {
  let lin = "www.google.com";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidCred, setIsValidCred] = useState(true);
  const [confirm_password, set_confirm_Password] = useState();
  const [name, setName] = useState();
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (authContext.login(email, password) && password === confirm_password) {
      history.replace("/homein");
    }
    else setIsValidCred(false);
  };
  return (
    <>
      <div className="wrapp">
        <div className="login_body">
          <div className="login_box">
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-wrap">
                <Inputuser
                  type=""
                  placeholder="User Name"
                  value={name}
                  setValue={setName}
                />
              </div>
              <div className="input-wrap">
                <Inputuser
                  type="email"
                  placeholder="Email or Phone number"
                  value={email}
                  setValue={setEmail}
                />
              </div>
              <div className="input-wrap">
                <Inputuser
                  type="password"
                  placeholder="Password"
                  value={password}
                  setValue={setPassword}
                />
              </div>
              <div className="input-wrap">
                <Inputuser
                  type="password"
                  placeholder=" confirm Password"
                  value={confirm_password}
                  setValue={set_confirm_Password}
                />
              </div>
              <div className="input-wrap">
                {!isValidCred && (
                  <div className="alert alert-danger">
                    Invalid SignUp credentials
                  </div>
                )}
                <button type="submit">SignUp</button>
              </div>
              <div className="login_footer">
              <div className="terms">
                  <p>
                    {" "}
                    this page is protected by Google to ensure you are not a bot{" "}
                    <NavLink className="navbar-brand" to="/terms">Learn more.</NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <FooterSec />
      </div>
    </>
  );
};
