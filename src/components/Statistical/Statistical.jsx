import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import Header from '../Header/Header';
import './Statistical.scss';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
Chart.defaults.color = '#fff';
function Statistical() {
  // const data = {
  //   labels: [
  //     'Hà Nội',
  //     'Hải Dương',
  //     'Hà Tĩnh',
  //     'Thanh Hóa',
  //     'Nghệ An',
  //     'Bình Thuận',
  //     'Đà Nẵng',
  //     'Bắc Giang',
  //     'Sơn La',
  //     'Lai Châu',
  //   ],

  //   datasets: [
  //     {
  //       label: 'Nguyễn Văn A',
  //       data: [48, 63, 58, 40, 30, 46, 56, 45, 55, 47],
  //       borderColor: 'rgba(255, 255, 255, 1)',
  //       backgroundColor: '#22a6ff',
  //     },
  //     {
  //       label: 'Nguyễn Văn B',
  //       data: [17, 10, 20, 27, 25, 33, 24, 38, 34, 28],
  //       backgroundColor: '#42ff88',
  //       font: {
  //         size: 16, // Cỡ chữ của tiêu đề trục X
  //       },
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,

  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Thống kê bầu cử',
  //       color: 'white',
  //       font: {
  //         size: 20, // Cỡ chữ của tiêu đề trục X
  //       },
  //     },
  //     borderColor: '#fff',
  //   },
  //   scales: {
  //     x: {
  //       border: {
  //         display: true, // Hiển thị đường trục X ngoài cùng
  //         color: 'white', // Màu của trục X ngoài cùng
  //       },
  //       grid: {
  //         display: 'none', // Màu sắc của đường trục X (grid lines)
  //       },
  //       ticks: {
  //         color: 'white', // Màu sắc cho nhãn trên trục X
  //       },
  //       title: {
  //         display: true,
  //         text: 'Tỉnh thành',
  //         color: 'white', // Màu sắc cho tiêu đề trục X
  //         font: {
  //           size: 16, // Cỡ chữ của tiêu đề trục X
  //         },
  //       },
  //     },
  //     y: {
  //       border: {
  //         display: true, // Hiển thị đường trục X ngoài cùng
  //         color: 'white', // Màu của trục X ngoài cùng
  //       },
  //       grid: {
  //         display: 'none', // Màu sắc của đường trục X (grid lines)
  //       },
  //       ticks: {
  //         color: 'white', // Màu sắc cho nhãn trên trục Y
  //       },
  //       title: {
  //         display: true,
  //         text: 'Tỉ lệ (%)',
  //         color: 'white', // Màu sắc cho tiêu đề trục Y
  //         font: {
  //           size: 16, // Cỡ chữ của tiêu đề trục X
  //         },
  //       },
  //     },
  //   },
  // };
  // const images = [
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWH_Uk5GhUcs_IXcOtmVodFFYSDVF-blVVw&s', // Bernie Sanders
  //   '../../assets/user1.png',
  //   '../../assets/user1.png',
  //   '../../assets/user1.png',
  //   '../../assets/user1.png',
  //   '../../assets/user1.png',
  // ];

  // const data = {
  //   labels: [
  //     'Bernie Sanders',
  //     'Joe Biden',
  //     'Pete Buttigieg',
  //     'Elizabeth Warren',
  //     'Amy Klobuchar',
  //     'Tom Steyer',
  //     'Tulsi Gabbard',
  //   ],
  //   datasets: [
  //     {
  //       label: 'Iowa',
  //       data: [26.1, 15.8, 26.2, 18, 12.3, 0.3, 0],
  //       backgroundColor: 'rgba(54, 162, 235, 0.6)',
  //     },
  //   ],
  // };
  // const options = {
  //   indexAxis: 'y', // Đặt biểu đồ theo chiều ngang
  //   plugins: {
  //     beforeDraw: (chart) => {
  //       const ctx = chart.ctx;
  //       const yAxis = chart.scales.y;

  //       yAxis.ticks.forEach((value, index) => {
  //         const image = new Image();
  //         image.src = images[index]; // Chọn ảnh dựa trên index của nhãn

  //         image.onload = () => {
  //           const y = yAxis.getPixelForTick(index) - image.height / 2;
  //           const x = chart.chartArea.left - image.width - 10; // Vị trí của ảnh trên trục Y
  //           ctx.drawImage(image, x, y, 30, 30); // Kích thước của ảnh
  //         };
  //       });
  //     },
  //   },
  //   scales: {
  //     y: {
  //       ticks: {
  //         color: 'black',
  //         padding: 50, // Tăng khoảng cách giữa ảnh và nhãn
  //       },
  //     },
  //     x: {
  //       ticks: {
  //         color: 'black',
  //       },
  //     },
  //   },
  // };

  return (
    <>
      <Header />
      <div className="st-container">
        <div className="st-body">
          <div
            style={{ fontSize: '20px', color: 'white', textAlign: 'center' }}
            className="st-title"
          >
            Phường Bách Khoa
          </div>
          <div className="st-content">
            <div className="content-left">
              <div className="person">
                <div> Nguyễn Văn A</div>
                <div className="image image1"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn B</div>
                <div className="image image2"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn C</div>
                <div className="image image3"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn D</div>
                <div className="image image4"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn E</div>
                <div className="image image5"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn F</div>
                <div className="image image6"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn G</div>
                <div className="image image7"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn H</div>
                <div className="image image8"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn I</div>
                <div className="image image9"></div>
              </div>
              <div className="person">
                <div> Nguyễn Văn K</div>
                <div className="image image10"></div>
              </div>
            </div>
            <div className="content-right">
              <div
                className="person1"
                style={{
                  width: '60%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                15%
              </div>

              <div
                className="person2"
                style={{
                  width: '72%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                18%
              </div>

              <div
                className="person1"
                style={{
                  width: '40%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                10%
              </div>

              <div
                className="person1"
                style={{
                  width: '20%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                5%
              </div>

              <div
                className="person1"
                style={{
                  width: '80%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                20%
              </div>

              <div
                className="person1"
                style={{
                  width: '16%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                4%
              </div>

              <div
                className="person1"
                style={{
                  width: '32%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                8%
              </div>
              <div
                className="person1"
                style={{
                  width: '28%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                7%
              </div>
              <div
                className="person1"
                style={{
                  width: '20%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                5%
              </div>
              <div
                className="person1"
                style={{
                  width: '32%',
                  backgroundColor: '#0775CA',
                  display: 'flex',
                  justifyContent: 'end',
                  paddingRight: '10px',
                  alignItems: 'center',
                  height: '40px',
                  marginTop: '10px',
                }}
              >
                8%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistical;
