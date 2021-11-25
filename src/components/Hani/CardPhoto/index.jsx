import { FaPlayCircle } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import img1 from "../../../files/Images/swiper1.jpg";
import './cardphoto.css'


export const CardPhoto = (props) => {
  let icoColor = '#d6d4d4'
  return (
    <>
      <div id='CardPhoto' class="card">
        <img src={props.src} class="card-img-top" alt="" />

        <div class="card-body">
        <div className='row' >

          <div className="col1 col-6" >
            <FaPlayCircle size='35px' style={{ color: icoColor }} />
            <AiOutlinePlusCircle size='40px' style={{ color: icoColor }} />
          </div>

          <div className="col2 col-6" >
            <IoIosArrowDropdown size='40px' style={{ color: icoColor }} />
          </div>

        </div>

          <div className='line1' >
            <p className='match'>90% Matchs</p>
            <p className='age'>16+</p>
            <p>1 Season</p>
            <p className='quality'>HD</p>
          </div>

          <div className='line2'>
            <p>Cat1</p>
            <BsDot />
            <p>Cat1</p> 
            <BsDot />
            <p>Cat1</p>
          </div>
        </div>
      </div>
    </>
  );
};
