/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalProvider';
import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = () => {
    setGlobalVariable(globalVariable - 1);
    onClose();
    navigate('/vote');
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="body">
          <div className="title">Bạn đã hoàn tất voting</div>
          <div className="content">
            Quay lại màn hình &quot;Voting&quot; để tiếp tục bình chọn. Lưu ý mỗi ứng cử viên chỉ
            được bình chọn một lần.
          </div>
          <div className="btn">
            <button onClick={handleSubmit}>HOÀN THÀNH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
