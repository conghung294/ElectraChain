import { useNavigate } from 'react-router-dom';
import IconLogin from '../../assets/IconLogin';
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
              <div className=" d-flex">
                <div className="iconLogin" style={{ width: '200px' }}>
                  <IconLogin />
                  <span style={{ marginLeft: '30px' }}>RSX1121</span>
                </div>
                <div className="">
                  <input
                    type="text"
                    disabled
                    readOnly
                    placeholder="Public Key"
                    className="publicKey"
                    style={{ marginLeft: '6px', width: '200px!important' }}
                  />
                </div>
              </div>
              <input
                type="text"
                className="py-1 mt-3"
                style={{
                  'border-radius': '4px',
                  width: '406px',
                  height: '40px',
                  padding: '0 20px',
                }}
                placeholder="Email"
              />
              <input
                type="text"
                className="py-1 mt-3"
                style={{
                  'border-radius': '4px',
                  width: '406px',
                  height: '40px',
                  padding: '0 20px',
                }}
                placeholder="Password"
              />
              <input
                type="text"
                className="py-1 mt-3"
                style={{
                  'border-radius': '4px',
                  width: '406px',
                  height: '40px',
                  padding: '0 20px',
                }}
                placeholder="Confirm Password"
              />
              <div className="w-[406px]">
                <input
                  type="text"
                  className="py-1 mt-3"
                  style={{
                    'border-radius': '4px',
                    width: '200px',
                    height: '40px',
                    padding: '0 20px',
                  }}
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="py-1 mt-3"
                  style={{
                    'border-radius': '4px',
                    width: '200px',
                    height: '40px',
                    padding: '0 20px',
                    marginLeft: '6px',
                  }}
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-[406px]">
                <input
                  type="text"
                  className="py-1 mt-3"
                  style={{
                    'border-radius': '4px',
                    width: '200px',
                    height: '40px',
                    padding: '0 20px',
                  }}
                  placeholder="Address"
                />
                <input
                  type="text"
                  className="py-1 mt-3"
                  style={{
                    'border-radius': '4px',
                    width: '200px',
                    height: '40px',
                    padding: '0 20px',
                    marginLeft: '6px',
                  }}
                  placeholder="Bio"
                />
              </div>
              <button
                style={{
                  color: '#fff',
                  width: '406px',
                  height: '48px',
                  backgroundColor: '',
                  marginTop: '20px',
                  borderRadius: '4px',
                  fontSize: '20px',
                  backgroundImage: 'linear-gradient(310deg, #1171ef, #11cdef)',
                }}
                onClick={handleVerify}
              >
                Sign Up
              </button>
              {/* <div>Họ và tên</div>
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
              <input type="text" className="mt-1" /> */}
            </div>

            {/* <button onClick={handleVerify}>HOÀN THÀNH</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
