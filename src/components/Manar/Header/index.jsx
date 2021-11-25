import "./header.css";

export const Header = (props) => {
  return (
    <>
      <div id='Header'  className="myheader">
        <div className="internal">

          <div className="p1">
            <p>An Endless Number of Movies </p>
            <p>and Endless Televesion Shows</p>
            <p>watch now</p>
          </div>

          <div className="p2">
              <p>Enjoy watching your TV</p>
              <p>Watch on smart TVs and PlayStations</p>
          </div>

          <div class="input-group mb-3 container col-sm-8 col-lg-5">
            <input type="email" class="form-control" placeholder="Email Adress" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-danger" type="button" id="button-addon2">Start</button>
          </div>

        </div>
      </div>
    </>
  );
};
