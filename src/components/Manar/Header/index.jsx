import "./style.css";

export const Header = (props) => {
  return (
    <>
      <div className="myheader" style={{ color: "white" }}>
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

          <div class="input-group mb-3 container col-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-danger" type="button" id="button-addon2">Start</button>
          </div>

        </div>
      </div>
    </>
  );
};
