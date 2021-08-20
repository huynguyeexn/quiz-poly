import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import clx from "classnames";

export const QUIZ_BOX = (props) => {
  const [isSelected, setIsSelected] = useState(null);
  const [countSelected, setCountSelected] = useState(0);

  useEffect(() => {
    console.log(props);
    if (props.selected > -1) {
      setIsSelected(props.selected);
    } else {
      setIsSelected(null);
    }
  }, [props.answers]);

  const handleOnSelectAnswer = (index) => {
    if (isSelected === null) {
      setCountSelected(countSelected + 1);
      setIsSelected(index);
      props.onSelectAnswer(index);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 max-w-2xl text-gray-300  duration-200">
      <div className="progress mb-5">
        <div
          className="bg-gray-900 rounded h-1"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="bg-gradient-to-r from-blue-400 to-purple-800 rounded h-1 text-center"
            style={{
              width: `${(countSelected / props.max) * 100}%`,
              transition: "width 2s",
            }}
          ></div>
        </div>
        <p className="text-center mt-2">
          Câu {props.index}/{props.max}
        </p>
      </div>
      <div className="question mb-5 duration-200">
        <h5 className="font-semibold text-center text-xl">{props.question}</h5>
      </div>
      <div className="answers">
        {props.answers &&
          props.answers.map((answer, index) => (
            <button
              key={index}
              onClick={(e) => handleOnSelectAnswer(index)}
              className={clx(
                "mb-3 px-6 py-4 w-full rounded-lg border-2 border-gray-700 uppercase text-sm font-semibold hover:bg-gray-700 duration-200",
                {
                  "border-green-600":
                    isSelected !== null && props.correct === index,
                  "border-red-600":
                    isSelected === index && props.correct !== index,
                }
              )}
            >
              {answer}
            </button>
          ))}
      </div>
      <div className="button-group flex justify-between items-center border-t-2 border-gray-700 mt-4 pt-4">
        <div className="">
          {props.index > 1 && (
            <button
              onClick={props.prevQuestion}
              className="hover:bg-purple-700 px-6 py-3 rounded-lg duration-200 font-semibold border-2 border-purple-700"
            >
              Câu {props.index - 1}
            </button>
          )}
        </div>
        <div className="">
          {props.index < props.max && (
            <button
              onClick={props.nextQuestion}
              className="hover:bg-purple-700 px-6 py-3 rounded-lg duration-200 font-semibold border-2 border-purple-700"
            >
              Câu {props.index + 1}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

QUIZ_BOX.propTypes = {
  answers: PropTypes.array,
  correct: PropTypes.number,
  question: PropTypes.string,
  selected: PropTypes.number,
  index: PropTypes.number,
  max: PropTypes.number,
  onSelectAnswer: PropTypes.func,
  prevQuestion: PropTypes.func,
  nextQuestion: PropTypes.func,
};

QUIZ_BOX.defaultProps = {
  answers: [],
  correct: -1,
  question: "",
  selected: -1,
  index: 1,
  max: 1,
  onSelectAnswer: null,
  prevQuestion: null,
  nextQuestion: null,
};
