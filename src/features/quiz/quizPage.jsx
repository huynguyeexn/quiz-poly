import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectSection } from "../section/sectionSlice";
import QUIZ_BOX from "./components/quizBox";
import { resetQuiz, setQuizzes } from "./quizSlice";

const QUIZ_PAGE = () => {
  const { sectionIndex, quizIndex } = useParams();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (section && section.quizList) {
      dispatch(setQuizzes(section.quizList));
    }
  }, [section, dispatch]);

  return (
    <>
      {section && (
        <div className="max-w-xl my-3 text-lg text-gray-300">
          <div className="flex items-center justify-start space-x-4">
            <button
              onClick={(e) => history.push("/")}
              className="p-4 mb-4 duration-200 border-2 border-purple-900 rounded-lg hover:border-purple-600 hover:bg-gray-800"
            >
              <BsArrowLeft className="text-lg font-semibold" />
            </button>
            <p className="mb-4 text-lg">{section.name}</p>
          </div>
          {quiz && <QUIZ_BOX />}
        </div>
      )}
    </>
  );
};

export default QUIZ_PAGE;
