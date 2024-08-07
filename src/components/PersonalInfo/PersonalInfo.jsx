import { useState } from 'react';
import PersonalImg from '../../assets/PersonalImg';
import Header from '../Header/Header';
import './PersonalInfo.scss';

function PersonalInfo() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <div className="personal-container">
        <div className="personal-content">
          <div className="content-left">
            <input type="file" accept="image/*" onChange={handleImageChange} hidden id="image" />
            {image ? <img src={image} alt="Uploaded" className="img-upload" /> : <PersonalImg />}

            <button>
              <label htmlFor="image">THAY ĐỔI ẢNH</label>
            </button>
          </div>
          <div className="content-right">
            <div className="blue-color">HỌ VÀ TÊN</div>
            <div className="mt-1">Nguyễn Văn A</div>
            <div className="blue-color mt-3">NGÀY THÁNG NĂM SINH</div>
            <div className="mt-1">17/03/2003</div>
            <div className="d-flex justify-content-between mt-3">
              <div>
                <div className="blue-color">TUỔI</div>
                <div className="mt-1">21</div>
              </div>
              <div>
                <div className="blue-color">GIỚI TÍNH</div>
                <div className="mt-1">Nam</div>
              </div>
            </div>
            <div className="blue-color mt-3">SỐ CCCD/CMND</div>
            <div className="mt-1">038303020645</div>
            <div className="blue-color mt-3">SỐ ĐIỆN THOẠI</div>
            <div className="mt-1">+84 776214428</div>
            <div className="blue-color mt-3">ĐỊA CHỈ</div>
            <div className="mt-1">Hai Bà Trưng, Hà Nội</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
