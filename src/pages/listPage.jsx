import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSection } from "../features/section/sectionSlice";

const LIST_PAGE = () => {
  const sections = useSelector((state) => state.section.sections);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (sectionIndex, quizIndex) => {
    const payload = {
      sectionIndex: sectionIndex,
      quizIndex: quizIndex,
    };
    dispatch(selectSection(payload));
    history.push(`/quiz/${sectionIndex}/${quizIndex}`);
  };

  return (
    <div className="max-w-2xl p-4 text-gray-300">
      {sections &&
        sections.map((section, sectionIndex) => (
          <div className="mb-4" key={sectionIndex}>
            <h1 className="mb-3 text-xl font-bold">{section.name}</h1>
            {section.allQuiz.map((quiz, quizIndex) => (
              <div
                className="flex flex-row justify-between mb-4 overflow-hidden duration-300 transform bg-gray-800 rounded-lg hover:scale-105"
                key={quizIndex}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibod">
                    {quiz.name}
                    <span className="ml-2 text-sm text-gray-400">
                      ({quiz.quizList.length} Câu)
                    </span>
                  </h3>
                </div>
                <button
                  onClick={(e) => handleOnClick(sectionIndex, quizIndex)}
                  className="flex items-center justify-center px-8 py-4 font-semibold duration-200 bg-gradient-to-r from-blue-600 via-purple-700 to-purple-700 hover:opacity-70"
                >
                  <HiOutlineArrowRight></HiOutlineArrowRight>
                </button>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default LIST_PAGE;
