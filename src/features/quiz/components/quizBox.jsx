import { useSelector } from "react-redux";
import ANSWERS_GROUP from "./answers";
import BUTTON_GROUP from "./buttons";
import PROGRESS from "./progress";

const QUIZ_BOX = () => {
  const { quiz, quizzes, mark, currentIndex } = useSelector(
    (state) => state.quiz
  );

  return (
    <div className="max-w-xl p-5 text-gray-300 duration-200 bg-gray-800 rounded-lg">
      <PROGRESS totalQuiz={quizzes.length} mark={mark} />
      <div className="mb-5 duration-200 question">
        <h5 className="font-semibold leading-8 text-center ">
          Câu {currentIndex + 1}: {quiz.question}
        </h5>
      </div>
      <ANSWERS_GROUP />
      <BUTTON_GROUP />
    </div>
  );
};

export default QUIZ_BOX;
