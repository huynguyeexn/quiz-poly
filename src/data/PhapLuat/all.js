import { PhapLuat1 } from "./section1";
import { PhapLuat2 } from "./section2";
import { PhapLuat3 } from "./section3";
import { PhapLuat4 } from "./section4";
import { PhapLuat5 } from "./section5";
import { PhapLuat6 } from "./section6";
import { PhapLuat7 } from "./section7";
import { PhapLuat8 } from "./section8";

export const allPhapLuat = {
  name: "Môn pháp luật",
  allQuiz: [
    PhapLuat1,
    PhapLuat2,
    PhapLuat3,
    PhapLuat4,
    PhapLuat5,
    PhapLuat6,
    PhapLuat7,
    PhapLuat8,
    {
      name: "Bài tổng hợp",
      quizList: [
        ...PhapLuat1.quizList,
        ...PhapLuat2.quizList,
        ...PhapLuat3.quizList,
        ...PhapLuat4.quizList,
        ...PhapLuat5.quizList,
        ...PhapLuat6.quizList,
        ...PhapLuat7.quizList,
        ...PhapLuat8.quizList,
      ],
    },
  ],
};
