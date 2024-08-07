import { useNavigate } from 'react-router-dom';
import RegisterImg from '../../assets/RegisterImg';
import './Register.scss';

function Register() {
  const navigate = useNavigate();
  const handleVerify = async () => {
    navigate('/verify');
  };

  return (
    <>
      <div className="register-container">
        <div className="register-content">
          <div className="content-left">
            <RegisterImg />
          </div>
          <div className="content-right">
            <div className="title">ĐĂNG KÝ TÀI KHOẢN</div>
            <div className="body mt-4">
              <div>Họ và tên</div>
              <input type="text" className="mt-1" />
              <div className="mt-3">Ngày tháng năm sinh</div>
              <input type="date" className="mt-1" />
              <div className="mt-3">Số CCCD/CMND</div>
              <input type="text" className="mt-1" />
              <div className="mt-3">Số điện thoại</div>
              <input type="text" className="mt-1" />
              <div className="mt-3">Mật khẩu</div>
              <input type="text" className="mt-1" />
              <div className="mt-3">Nhập lại mật khẩu</div>
              <input type="text" className="mt-1" />
            </div>

            <button onClick={handleVerify}>HOÀN THÀNH</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
