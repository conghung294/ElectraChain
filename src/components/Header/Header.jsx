/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Count from '../../assets/Count';
import { GlobalContext } from '../GlobalProvider';
import './Header.scss';
function Header() {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
  const location = useLocation();
  return (
    <>
      <div className="space"></div>
      <div className="header-container">
        <ul>
          <li className="count">
            {globalVariable}
            <Count />
          </li>
          <li className={location.pathname === '/home' ? 'active' : ''}>
            <Link to="/home">TRANG CHỦ</Link>
          </li>
          <li className={location.pathname === '/statistical' ? 'active' : ''}>
            <Link to="/statistical">THỐNG KÊ</Link>
          </li>
          <li className={location.pathname === '/news' ? 'active' : ''}>
            <Link to="/news">TIN TỨC</Link>
          </li>
          <li className={location.pathname === '/personalInfo' ? 'active' : ''}>
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
