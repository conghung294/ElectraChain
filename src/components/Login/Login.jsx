import { useNavigate } from 'react-router-dom';
//import { LoginImg } from '../../assets/image';
import IconLogin from '../../assets/IconLogin';
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
          {/* <div>Số CCCD/CMND</div>
          <input type="text" className="py-1 mt-1 w-[200px]" /> */}
          <div className="w-[200px] d-flex">
            <div className="iconLogin" style={{ width: '200px' }}>
              <IconLogin />
              <span style={{ marginLeft: '30px' }}>RSX1121</span>
            </div>
            <div className="">
              <input type="text" disabled readOnly placeholder="Public Key" className="publicKey" />
            </div>
          </div>
          {/* <div className="mt-3">Mật khẩu</div> */}
          <input
            type="text"
            className="py-1 mt-3"
            style={{ borderRadius: '4px', height: '48px', padding: '0 20px' }}
            placeholder="Password"
          />
          {/* <div className="forgotPassword mt-3 "> Quên mật khẩu?</div>
          <div className="mt-2">
            Nếu bạn chưa có tài khoản vui lòng
            <span className="register mx-1" onClick={handleRegister}>
              Đăng ký
            </span>
            để bầu chọn
          </div>
          <button className="btnLogin mt-3" onClick={() => handleLogin()}>
            Đăng nhập
          </button> */}
          <button
            style={{
              width: '406px',
              height: '48px',
              backgroundColor: '',
              marginTop: '30px',
              borderRadius: '4px',
              backgroundImage: 'linear-gradient(310deg, #2dce89, #2dcecc)',
              color: '#fff',
            }}
            onClick={() => handleLogin()}
          >
            Sign In
          </button>
          <button
            style={{
              color: '#fff',
              width: '406px',
              height: '48px',
              backgroundColor: '',
              marginTop: '20px',
              borderRadius: '4px',
              backgroundImage: 'linear-gradient(310deg, #1171ef, #11cdef)',
            }}
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
