import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import QUIZ_BOX from "../components/quiz/quizBox";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes, resetQuiz } from "../features/quiz/quizSlice";
import { BsArrowLeft } from "react-icons/bs";
import { selectSection } from "../features/section/sectionSlice";

const QUIZ_PAGE = () => {
  const { sectionIndex, quizIndex } = useParams();
  console.log(sectionIndex, quizIndex);

  const section = useSelector((state) => state.section.section);
  const { quiz } = useSelector((state) => state.quiz);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!section) {
      const payload = {
        sectionIndex: sectionIndex,
        quizIndex: quizIndex,
      };
      dispatch(selectSection(payload));
    }
    return () => {
      dispatch(resetQuiz());
    };
  }, []);

  useEffect(() => {
    if (section && section.quizList) {
      dispatch(setQuizzes(section.quizList));
    }
  }, [section]);

  return (
    <>
      {section && (
        <div className="max-w-xl my-3 text-lg text-gray-300">
          <div className="flex items-center justify-start space-x-4">
            <button
              onClick={(e) => history.push("/")}
              className="p-4 mb-4 duration-200 border-2 border-purple-700 rounded-lg hover:bg-purple-700"
            >
              <BsArrowLeft className="text-2xl font-semibold" />
            </button>
            <p className="mb-4 text-2xl">{section.name}</p>
          </div>
          {quiz && <QUIZ_BOX />}
        </div>
      )}
    </>
  );
};

export default QUIZ_PAGE;
