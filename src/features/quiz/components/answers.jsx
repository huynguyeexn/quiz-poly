import clx from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../quizSlice";

const ANSWERS_GROUP = () => {
  const { quiz } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const handleOnSelectAnswer = (index) => {
    if (quiz.selected === -1) {
      dispatch(selectAnswer(index));
    }
  };

  return (
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
  );
};

export default ANSWERS_GROUP;
