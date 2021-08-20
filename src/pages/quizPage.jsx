import { Section1 } from "../data/PhapLuat";
import { QuizPhapLuat } from "../data";

import { useState, useEffect } from "react";
import { QUIZ_BOX } from "../components/quiz";

import { useParams } from "react-router-dom";

export const QUIZ_PAGE = () => {
  const { id } = useParams();

  console.log(QuizPhapLuat[id]);
  const [quizList, setQuizList] = useState(
    QuizPhapLuat[id].quizList.sort(() => Math.random() - 0.5)
  );
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [index, setIndex] = useState(0);
  const [mark, setMark] = useState(0);

  useEffect(() => {
    setCurrentQuiz(quizList[index]);
  }, [index]);

  const handleOnSelectAnswer = (i) => {
    if (currentQuiz.correct === i) {
      setMark(mark + 1);
    }

    setCurrentQuiz({ ...currentQuiz, selected: i });

    const newList = [...quizList];
    newList[index].selected = i;
    setQuizList(newList);
  };

  const handlePrevQuestion = () => {
    setIndex(index - 1);
  };
  const handleNextQuestion = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <div className=" flex justify-between  font-semibold text-lg my-3 w-full max-w-2xl text-gray-300 space-x-4">
        <span className="">{QuizPhapLuat[id].name}</span>
        <span>
          Điểm: {mark}/{quizList.length}
        </span>
      </div>
      {currentQuiz && (
        <QUIZ_BOX
          index={index + 1}
          max={quizList.length}
          prevQuestion={handlePrevQuestion}
          nextQuestion={handleNextQuestion}
          onSelectAnswer={handleOnSelectAnswer}
          {...currentQuiz}
        />
      )}
    </>
  );
};
