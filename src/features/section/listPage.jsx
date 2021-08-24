import React from "react";
import { useSelector } from "react-redux";
import CARD_SECTION from "./components/card";

const LIST_PAGE = () => {
  const sections = useSelector((state) => state.section.sections);

  return (
    <>
      {sections &&
        sections.map((section, sectionIndex) => (
          <div
            className="flex flex-col items-center w-full mb-4"
            key={sectionIndex}
          >
            <div className="sticky top-0 z-10 flex justify-center w-full p-4 text-xl font-bold bg-gray-900">
              <h1 className="max-w-2xl">{section.name}</h1>
            </div>
            <div className="max-w-2xl p-4 text-gray-300">
              {section.allQuiz.map((quiz, quizIndex) => (
                <CARD_SECTION
                  quiz={quiz}
                  quizIndex={quizIndex}
                  sectionIndex={sectionIndex}
                />
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default LIST_PAGE;
