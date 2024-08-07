import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Verify.scss';

function Verify() {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleRegister = async () => {
    navigate('/');
  };

  useEffect(() => {
    inputRefs.current.forEach((input, index) => {
      if (input) {
        input.setAttribute('maxlength', 1);

        const handleKeyUp = (e) => {
          if (e.keyCode === 8 || e.keyCode === 37) {
            if (index > 0) {
              inputRefs.current[index - 1].select();
            }
          } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 39
          ) {
            if (index < inputRefs.current.length - 1) {
              inputRefs.current[index + 1].select();
            }
          }
        };

        input.addEventListener('keyup', handleKeyUp);

        // Cleanup function to remove event listener
        return () => {
          input.removeEventListener('keyup', handleKeyUp);
        };
      }
    });
  }, []);

  return (
    <div className="verify-container">
      <div className="verify-content">
        <div className="title">XÁC MINH TÀI KHOẢN</div>
        <div className="input-otp">NHẬP OTP được gửi đến số điện thoại *******889</div>
        <div className="digit-group">
          {Array.from({ length: 6 }, (_, index) => (
            <React.Fragment key={index}>
              <input type="text" ref={(el) => (inputRefs.current[index] = el)} />
            </React.Fragment>
          ))}
        </div>

        <div className="mt-4">Mã OTP này sẽ hết hạn trong 2:00</div>
        <button onClick={handleRegister} className="mt-4">
          XÁC NHẬN
        </button>
      </div>
    </div>
  );
}

export default Verify;
