import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Header from '../Header/Header';
import './Statistical.scss';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
Chart.defaults.color = '#fff';
function Statistical() {
  const data = {
    labels: [
      'Hà Nội',
      'Hải Dương',
      'Hà Tĩnh',
      'Thanh Hóa',
      'Nghệ An',
      'Bình Thuận',
      'Đà Nẵng',
      'Bắc Giang',
      'Sơn La',
      'Lai Châu',
    ],

    datasets: [
      {
        label: 'People 1',
        data: [48, 63, 58, 40, 30, 46, 56, 45, 55, 47],
        borderColor: 'rgba(255, 255, 255, 1)',
        backgroundColor: '#22a6ff',
      },
      {
        label: 'People 2',
        data: [17, 10, 20, 27, 25, 33, 24, 38, 34, 28],
        backgroundColor: '#42ff88',
        font: {
          size: 16, // Cỡ chữ của tiêu đề trục X
        },
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Thống kê bầu cử',
        color: 'white',
        font: {
          size: 20, // Cỡ chữ của tiêu đề trục X
        },
      },
      borderColor: '#fff',
    },
    scales: {
      x: {
        border: {
          display: true, // Hiển thị đường trục X ngoài cùng
          color: 'white', // Màu của trục X ngoài cùng
        },
        grid: {
          display: 'none', // Màu sắc của đường trục X (grid lines)
        },
        ticks: {
          color: 'white', // Màu sắc cho nhãn trên trục X
        },
        title: {
          display: true,
          text: 'Tỉnh thành',
          color: 'white', // Màu sắc cho tiêu đề trục X
          font: {
            size: 16, // Cỡ chữ của tiêu đề trục X
          },
        },
      },
      y: {
        border: {
          display: true, // Hiển thị đường trục X ngoài cùng
          color: 'white', // Màu của trục X ngoài cùng
        },
        grid: {
          display: 'none', // Màu sắc của đường trục X (grid lines)
        },
        ticks: {
          color: 'white', // Màu sắc cho nhãn trên trục Y
        },
        title: {
          display: true,
          text: 'Tỉ lệ (%)',
          color: 'white', // Màu sắc cho tiêu đề trục Y
          font: {
            size: 16, // Cỡ chữ của tiêu đề trục X
          },
        },
      },
    },
  };
  return (
    <>
      <Header />
      <div className="st-container">
        <div className="st-content">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Statistical;
