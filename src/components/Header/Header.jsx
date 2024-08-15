/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Count from '../../assets/Count';
import { GlobalContext } from '../GlobalProvider';
import './Header.scss';
function Header() {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
  return (
    <>
      <div className="space"></div>
      <div className="header-container">
        <ul>
          <li className="count">
            {globalVariable}
            <Count />
          </li>
          <li>
            <Link to="/home">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/statistical">THỐNG KÊ</Link>
          </li>
          <li>
            <Link to="/news">TIN TỨC</Link>
          </li>
          <li>
            <Link to="/personalInfo">THÔNG TIN CÁ NHÂN</Link>
          </li>

          <Link to="/vote" className="vote">
            <button>VOTE</button>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
