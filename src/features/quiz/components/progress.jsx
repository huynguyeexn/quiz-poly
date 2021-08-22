import React from "react";
import PropTypes from "prop-types";

const PROGRESS = (props) => {
  return (
    <div className="flex items-center justify-between mb-5 space-x-4">
      <div className="flex-grow progress">
        <div
          className="h-1 bg-gray-900 rounded"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="h-1 text-center rounded bg-gradient-to-r from-blue-400 to-purple-800"
            style={{
              width: `${(props.mark / props.totalQuiz) * 100}%`,
              transition: "width 2s",
            }}
          ></div>
        </div>
      </div>
      <span className="text-sm">
        {props.mark} / {props.totalQuiz}
      </span>
    </div>
  );
};

PROGRESS.propTypes = {
  totalQuiz: PropTypes.number,
  mark: PropTypes.number,
};

PROGRESS.defaultProps = {
  totalQuiz: 0,
  mark: 0,
};

export default PROGRESS;
