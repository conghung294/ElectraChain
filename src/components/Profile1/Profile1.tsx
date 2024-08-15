import React, { useState } from 'react';
import Img2 from '../../assets/img2';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import './Profile1.scss';

function Profile1() {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  // const submit = () => {
  //   toast.success('Bầu cử thành công !');
  // };
  return (
    <>
      <Header />
      <div className="profile1-container">
        <div className="profile1-content">
          <div className="content-left">
            <div className="image">
              <div className="">
                <Img2 />
              </div>
              <div className="name">ỨNG CỬ VIÊN</div>
            </div>
            <div className="mt-4 blue-color">HỌ VÀ TÊN</div>
            <div className="mt-1">People 1</div>
            <div className="mt-3 blue-color">NGÀY THÁNG NĂM SINH</div>
            <div>10/7/1957</div>
            <div className="mt-3 blue-color">QUÊ QUÁN</div>
            <div className="mt-1">Xã Nghĩa Trụ, huyện Văn Giang, tỉnh Hưng Yên</div>
            <div className="mt-3 blue-color">NGÀY VÀO ĐẢNG</div>
            <div className="mt-1">22/08/1981</div>
            <div className="mt-3 blue-color">DÂN TỘC</div>
            <div className="mt-1">Kinh</div>
            <div className="mt-3 blue-color">ĐỊA CHỈ</div>
            <div className="mt-1">Hai Bà Trưng, Hà Nội</div>
          </div>

          <div className="content-right">
            <div className="detail">CHI TIẾT TIỂU SỬ</div>
            <ul className="mt-3">
              <li>Ủy viên Trung ương Đảng khóa XI, XII, XIII.</li>
              <li>Ủy viên bộ chính trị khóa XII, XIII.</li>
              <li>Đại biểu quốc hội khóa XIV, XV.</li>
              <li>Thứ trưởng Bộ Công an: 2010-2016.</li>
              <li>Bộ trưởng Bộ Công an: 2016-2024.</li>
              <li>Được thăng cấp bậc hàm Đại tướng Công an nhân dân tháng 01/2019.</li>
              <li>Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam: 2024.</li>
              <li>
                Ngày 03/8/2024: Được Ban Chấp hành Trung ương Đảng bầu giữa chức Tổng Bí thư Ban
                Chấp hành Trung ương Đảng Cộng sản Việt Nam khóa XIII.
              </li>
            </ul>
          </div>
        </div>
        <div className="submit">
          <button onClick={openModal}>BẦU CỬ</button>
        </div>
      </div>

      <Modal isOpen={isShowModal} onClose={closeModal} />
    </>
  );
}

export default Profile1;
