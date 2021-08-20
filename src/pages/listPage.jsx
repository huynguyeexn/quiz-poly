import React from "react";
import { QuizPhapLuat } from "../data";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const LIST_PAGE = () => {
  return (
    <div className="max-w-2xl p-4 text-gray-300">
      {QuizPhapLuat.map((quiz, index) => (
        <div
          className="bg-gray-800 rounded-lg flex flex-row mb-4 justify-between overflow-hidden hover:scale-105 transform duration-300"
          key={index}
        >
          <div className="p-6">
            <h3 className="font-semibod text-lg">
              {quiz.name}
              <span className="text-gray-400 text-sm ml-2">
                ({quiz.quizList.length} Câu)
              </span>
            </h3>
          </div>
          <Link
            to={`/phap-luat/${index}`}
            className="py-4 px-8 bg-gradient-to-r from-blue-600 via-purple-700 to-purple-700 flex justify-center items-center font-semibold hover:opacity-70 duration-200"
          >
            <HiOutlineArrowRight></HiOutlineArrowRight>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LIST_PAGE;
