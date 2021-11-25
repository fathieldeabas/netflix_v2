// this is src/components/landing
import "./landing.css";
// import go from "../../../files/Images/go.mp4";

export const Landing = () => {
  return (
    <>
    <div id='Landing' className="return">
      {/* <video src={go} alt="" autoPlay></video> */}
      <img src='https://data.whicdn.com/images/350713273/original.jpg' alt="" className="background" />
      {/* <img src='https://1.bp.blogspot.com/-xfGyzaWzZJg/YBFvlTRvECI/AAAAAAAAKSg/iyQQhyrClVobus_-Lk-yKaGtaiusRQ8vgCLcBGAsYHQ/s2048/smSbK5cd8T9XHcxEUcems23BDEF.jpg' alt="" className="background" /> */}
      <div className="divall container-fluid">
        <div className="row">
          <div className="col1 col-5">
            <img src="https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUbBjRwVQZd8S5iEggUToKEM5wWK8GP6X8P7vz3efLTJZfkMCQZ9s8VXBUc3hTPQR-VnOl3vqV4z_TAConDHA1I-MeZzUKwgwlk.webp?r=6b4" alt="" className="movielogo" ></img>

            <h3>Watch Now</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptatibus rerum autem harum, natus dolor perspiciatis
              praesentium laborum.
            </p>
            <div className="buttons">
              <button className="btn btn-light mr-3">
              <i class="fas fa-band-aid"></i>
                <span>Play</span>
              </button>

              <button className="btn btn-danger">
              <i class="fas fa-band-aid"></i>
                <span>More Info</span>
              </button>
            </div>
          </div>

          <div className="col2 col-5">
            <i>M</i>
            <div className="age">+18</div>
          </div>

        </div>  {/* end row */}
      </div>  {/* end divall */}
      </div>  {/* end return */}
    </>
  );
};
