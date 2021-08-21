import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import clx from "classnames";
import PROGRESS from "./progress";
import { useSelector, useDispatch } from "react-redux";
import {
  nextQuiz,
  prevQuiz,
  selectAnswer,
} from "../../features/quiz/quizSlice";

const QUIZ_BOX = (props) => {
  const { quiz, quizzes, mark, currentIndex, totalSelected } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();

  const handleOnSelectAnswer = (index) => {
    if (quiz.selected === -1) {
      dispatch(selectAnswer(index));
    }
  };

  const prevOnClick = () => {
    dispatch(prevQuiz());
  };

  const nextOnClick = () => {
    dispatch(nextQuiz());
  };

  return (
    <div className="max-w-xl p-5 text-gray-300 duration-200 bg-gray-800 rounded-lg">
      <PROGRESS totalQuiz={quizzes.length} mark={mark} />
      <div className="mb-5 duration-200 question">
        <h5 className="text-xl font-semibold leading-8 text-center">
          Câu {currentIndex + 1}: {quiz.question}
        </h5>
      </div>
      <div className="answers">
        {quiz &&
          quiz.answers.map((answer, index) => (
            <button
              key={index}
              onClick={(e) => handleOnSelectAnswer(index)}
              className={clx(
                "mb-3 px-6 py-4 w-full rounded-lg border-2 border-gray-700  hover:bg-gray-700 duration-200",
                {
                  "border-green-600":
                    quiz.selected > -1 && quiz.correct === index,
                  "border-red-600":
                    quiz.selected === index && quiz.correct !== index,
                }
              )}
            >
              {answer}
            </button>
          ))}
      </div>
      <div className="text-center"></div>
      <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-gray-700 button-group">
        <div className="">
          {currentIndex > 0 && (
            <button
              onClick={prevOnClick}
              className="px-6 py-3 font-semibold duration-200 border-2 border-purple-700 rounded-lg hover:bg-purple-700 "
            >
              Câu {currentIndex}
            </button>
          )}
        </div>
        <div className="">
          {currentIndex < quizzes.length - 1 && (
            <button
              onClick={nextOnClick}
              className="px-6 py-3 font-semibold duration-200 border-2 border-purple-700 rounded-lg hover:bg-purple-700 "
            >
              Câu {currentIndex + 1}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QUIZ_BOX;
