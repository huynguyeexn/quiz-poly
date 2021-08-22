import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextQuiz, prevQuiz } from "../quizSlice";

const BUTTON_GROUP = () => {
  const { quizzes, currentIndex } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const prevOnClick = () => {
    dispatch(prevQuiz());
  };

  const nextOnClick = () => {
    dispatch(nextQuiz());
  };

  return (
    <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-gray-700 button-group">
      <div className="">
        {currentIndex > 0 && (
          <button
            onClick={prevOnClick}
            className="px-6 py-3 font-semibold duration-200 border-2 border-purple-900 rounded-lg hover:border-purple-700 hover:bg-gray-700"
          >
            Câu {currentIndex}
          </button>
        )}
      </div>
      <div className="">
        {currentIndex < quizzes.length - 1 && (
          <button
            onClick={nextOnClick}
            className="px-6 py-3 font-semibold duration-200 border-2 border-purple-900 rounded-lg hover:border-purple-700 hover:bg-gray-700"
          >
            Câu {currentIndex + 2}
          </button>
        )}
      </div>
    </div>
  );
};

export default BUTTON_GROUP;
