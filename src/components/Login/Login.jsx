import { useNavigate } from 'react-router-dom';
//import { LoginImg } from '../../assets/image';
import { LoginImg } from '../../assets/image';
import './Login.scss';
function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate('/home');
  };

  const handleRegister = async () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="content-left">
          <LoginImg />
          {/* <div className="imageLogin"></div> */}
        </div>
        <div className="content-right">
          <div>Số CCCD/CMND</div>
          <input type="text" className="py-1 mt-1 w-[200px]" />
          <div className="mt-3">Mật khẩu</div>
          <input type="text" className="py-1 mt-1" />
          <div className="forgotPassword mt-3 "> Quên mật khẩu?</div>
          <div className="mt-2">
            Nếu bạn chưa có tài khoản vui lòng
            <span className="register mx-1" onClick={handleRegister}>
              Đăng ký
            </span>
            để bầu chọn
          </div>
          <button className="btnLogin mt-3" onClick={() => handleLogin()}>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
