import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/img1';
import Img2 from '../../assets/img2';
import Header from '../Header/Header';
import './Vote.scss';

function Vote() {
  const [displayPosition1, setDisplayPosition1] = useState(true);
  const [displayPosition2, setDisplayPosition2] = useState(true);
  const [displayPosition3, setDisplayPosition3] = useState(true);
  const [displayPosition4, setDisplayPosition4] = useState(true);
  const [displayPosition5, setDisplayPosition5] = useState(true);
  const [displayPosition6, setDisplayPosition6] = useState(true);

  const tooglePosition1 = () => {
    setDisplayPosition1(!displayPosition1);
  };
  const tooglePosition2 = () => {
    setDisplayPosition2(!displayPosition2);
  };
  const tooglePosition3 = () => {
    setDisplayPosition3(!displayPosition3);
  };
  const tooglePosition4 = () => {
    setDisplayPosition4(!displayPosition4);
  };
  const tooglePosition5 = () => {
    setDisplayPosition5(!displayPosition5);
  };
  const tooglePosition6 = () => {
    setDisplayPosition6(!displayPosition6);
  };

  return (
    <>
      <Header />
      <div className="vote-container ">
        <div className="vote-content w-50">
          <div className="position">
            <div className="title">
              TỔNG BÍ THƯ
              <div className="title-icon" onClick={tooglePosition1}>
                {displayPosition1 ? (
                  <IoIosArrowUp color="black" />
                ) : (
                  <IoIosArrowDown color="black" />
                )}
              </div>
            </div>
            {displayPosition1 && (
              <div className="d-flex body">
                <Link to="/profile1" className="image">
                  <div className="">
                    <Img2 />
                  </div>
                  <div className="name">TÔ LÂM</div>
                </Link>
                <Link className="image">
                  <div className="">
                    <Img1 />
                  </div>
                  <div className="name">LƯƠNG CƯỜNG</div>
                </Link>
              </div>
            )}
          </div>

          <div className="position">
            <div className="title">
              CHỦ TỊCH NƯỚC
              <div className="title-icon" onClick={tooglePosition2}>
                {displayPosition2 ? (
                  <IoIosArrowUp color="black" />
                ) : (
                  <IoIosArrowDown color="black" />
                )}
              </div>
            </div>
            {displayPosition2 && (
              <div className="d-flex body">
                <Link to="/profile1" className="image">
                  <div className="">
                    <Img2 />
                  </div>
                  <div className="name">TÔ LÂM</div>
                </Link>
                <Link className="image">
                  <div className="">
                    <Img1 />
                  </div>
                  <div className="name">NGUYỄN MINH CHÍNH</div>
                </Link>
              </div>
            )}
          </div>

          <div className="position">
            <div className="title">
              PHÓ CHỦ TỊCH NƯỚC
              <div className="title-icon" onClick={tooglePosition3}>
                {displayPosition3 ? (
                  <IoIosArrowUp color="black" />
                ) : (
                  <IoIosArrowDown color="black" />
                )}
              </div>
            </div>
            {displayPosition3 && (
              <div className="d-flex body">
                <Link className="image">
                  <div className="">
                    <Img2 />
                  </div>
                  <div className="name">BÙI THỊ XUÂN</div>
                </Link>
                <Link className="image">
                  <div className="">
                    <Img1 />
                  </div>
                  <div className="name">NGUYỄN KIM NGÂN</div>
                </Link>
              </div>
            )}
          </div>

          <div className="position">
            <div className="title">
              CHỦ TỊCH QUỐC HỘI
              <div className="title-icon" onClick={tooglePosition4}>
                {displayPosition4 ? (
                  <IoIosArrowUp color="black" />
                ) : (
                  <IoIosArrowDown color="black" />
                )}
              </div>
            </div>
            {displayPosition4 && (
              <div className="d-flex body">
                <Link to="/profile1" className="image">
                  <div className="">
                    <Img2 />
                  </div>
                  <div className="name">TÔ LÂM</div>
                </Link>
                <Link className="image">
                  <div className="">
                    <Img1 />
                  </div>
                  <div className="name">LƯƠNG CƯỜNG</div>
                </Link>
              </div>
            )}
          </div>

          <div className="position">
            <div className="title">
              PHÓ CHỦ TỊCH QUỐC HỘI
              <div className="title-icon" onClick={tooglePosition5}>
                {displayPosition5 ? (
                  <IoIosArrowUp color="black" />
                ) : (
                  <IoIosArrowDown color="black" />
                )}
              </div>
            </div>
            {displayPosition5 && (
              <div className="d-flex body">
                <Link to="/profile1" className="image">
                  <div className="">
                    <Img2 />
                  </div>
                  <div className="name">TÔ LÂM</div>
                </Link>
                <Link className="image">
                  <div className="">
                    <Img1 />
                  </div>
                  <div className="name">LƯƠNG CƯỜNG</div>
                </Link>
              </div>
            )}
          </div>

          <div className="position">
            <div className="title">
              THỦ TƯỚNG CHÍNH PHỦ
              <div className="title-icon" onClick={tooglePosition6}>
                {displayPosition6 ? (
                  <IoIosArrowUp color="black" />
                ) : (
                  <IoIosArrowDown color="black" />
                )}
              </div>
            </div>
            {displayPosition6 && (
              <div className="d-flex body">
                <Link to="/profile1" className="image">
                  <div className="">
                    <Img2 />
                  </div>
                  <div className="name">TÔ LÂM</div>
                </Link>
                <Link className="image">
                  <div className="">
                    <Img1 />
                  </div>
                  <div className="name">LƯƠNG CƯỜNG</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vote;
