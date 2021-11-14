import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/authcontext.jsx";
import { Inputuser } from "../../component/Fathi/logininput.jsx";
import { FooterSec } from "../../component/Fathi/footer.jsx";
import img1 from "../../files/Images/icon.png";

export const Login = () => {
  let lin = "www.google.com";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidCred, setIsValidCred] = useState(true);
  // const history=useHistory();

  const authContext = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (authContext.login(email, password)) {
      console.log("dahfauo");
    }
  };
  return (
    <>
      <div className="wrapp">
        <div className="login_body">
          <div className="login_box">
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
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
                {!isValidCred && (
                  <div className="alert alert-danger">
                    Invalid login credentials
                  </div>
                )}
                <button type="submit">Log-in</button>
              </div>
              <div className="support">
                <div className="remember">
                  <span>
                    {" "}
                    <input type="checkbox"></input>
                  </span>
                  <span> Remember me</span>
                </div>
                <div>Need help ?</div>
              </div>
              <div className="login_footer">
                <div className="login_facebook">
                  <span>
                    <img src={img1} alt=""></img>
                  </span>
                  <span>
                    <a href={lin}>login with facebook</a>
                  </span>
                </div>
                <div className="sign-up">
                  <p>
                    {" "}
                    new to netflex?<a href={lin}>Sign up now.</a>{" "}
                  </p>
                </div>
                <div className="terms">
                  <p>
                    {" "}
                    this page is protected by Google to ensure you are not a bot{" "}
                    <a href={lin}>Learn more.</a>
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
