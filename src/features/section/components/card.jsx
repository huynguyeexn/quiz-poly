import PropTypes from "prop-types";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSection } from "../sectionSlice";

const CARD_SECTION = ({ quiz, quizIndex, sectionIndex }) => {
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
    <div
      onClick={handleOnClick}
      className="flex flex-row justify-between w-full mb-4 overflow-hidden duration-300 transform bg-gray-800 rounded-lg cursor-pointer hover:scale-105"
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
    </div>
  );
};

CARD_SECTION.propTypes = {
  quiz: PropTypes.object,
  quizIndex: PropTypes.number,
  sectionIndex: PropTypes.number,
};

export default CARD_SECTION;
