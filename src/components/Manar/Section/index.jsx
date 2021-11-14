import img1 from "../../../files/Images/mh1.jpg";
import "./section.css";

export const Section = () => {
    return (
            <>
            <div className="sectionclass container">
                <div className="row">
                    <div className="col col-sm-12 col-md-4">
                        <div className="colcontetnt">

                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-4">
                    <div className="colcontetnt">
                        <img src={img1} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            </>
    );
};

