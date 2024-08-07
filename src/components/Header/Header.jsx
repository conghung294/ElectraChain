import { Link } from 'react-router-dom';
import './Header.scss';
function Header() {
  return (
    <>
      <div className="space"></div>
      <div className="header-container">
        <ul>
          <li>
            <Link to="/home">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/news">TIN TỨC</Link>
          </li>
          <li>
            <Link to="/personalInfo">THÔNG TIN CÁ NHÂN</Link>
          </li>

          <Link to="/vote" className="vote">
            <button>BẦU CỬ </button>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
