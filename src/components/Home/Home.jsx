/* eslint-disable no-unused-vars */
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Home.scss';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function Home() {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sample Horizontal Bar Chart',
      },
    },
  };
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <div className="home-item">
            <div className="item">
              <div className="title">100.000</div>
              <div className="content">Lượt truy cập</div>
              <div className="incre">
                <MdOutlineArrowOutward color="#27AE60" size={20} />
                1.20%
              </div>
            </div>

            <div className="item">
              <div className="title">87.000</div>
              <div className="content">Tổng số phiếu bầu</div>
              <div className="incre">
                <MdOutlineArrowOutward color="#27AE60" size={20} />
                5%
              </div>
            </div>
            <div className="item3">
              <div className="title">49.65%</div>
              <div className="content">Tổng số cử tri hoàn thành</div>
              <div className="incre">
                <MdOutlineArrowOutward color="#27AE60" size={20} />
                12%
              </div>
            </div>
            <div className="item">
              <div className="title">30%</div>
              <div className="content">Unactive</div>
            </div>
          </div>
        </div>

        <div className="data-table">
          <div className="title">Số lượng cử tri đã hoàn thành bầu cử</div>
          <div className="table-header">
            <div className="table-cell table-id">#</div>
            <div className="table-cell table-province">Tỉnh</div>
            <div className="table-cell table-progress"></div>
          </div>

          <div className="table-row">
            <div className="table-cell table-id">01</div>
            <div className="table-cell table-province">Hà Nội</div>
            <div className="table-cell table-progress">
              <ProgressBar percentage={46} color={'#FFA500'} />
            </div>
            <div className="percent1">46%</div>
          </div>

          <div className="table-row">
            <div className="table-cell table-id">02</div>
            <div className="table-cell table-province">Quảng Ninh</div>
            <div className="table-cell table-progress">
              <ProgressBar percentage={17} color={'#A9DFD8'} />
            </div>
            <div className="percent2">17%</div>
          </div>

          <div className="table-row">
            <div className="table-cell table-id">03</div>
            <div className="table-cell table-province">Thành phố Hồ Chí Minh</div>
            <div className="table-cell table-progress">
              <ProgressBar percentage={19} color={'#1E90FF'} />
            </div>
            <div className="percent3">19%</div>
          </div>

          <div className="table-row">
            <div className="table-cell table-id">04</div>
            <div className="table-cell table-province">Thanh Hóa</div>
            <div className="table-cell table-progress">
              <ProgressBar percentage={29} color={'#DDA0DD'} />
            </div>
            <div className="percent4">29%</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
