/* eslint-disable react/prop-types */
import './ProgressBar.scss';

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
      {/* <div className="percent">
        <span className="percentage">{percentage}%</span>
      </div> */}
    </div>
  );
};

export default ProgressBar;
