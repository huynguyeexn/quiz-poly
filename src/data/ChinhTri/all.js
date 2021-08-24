import { final } from "./final";
import { ChinhTri1 } from "./section1";
import { ChinhTri10 } from "./section10";
import { ChinhTri11 } from "./section11";
import { ChinhTri12 } from "./section12";
import { ChinhTri13 } from "./section13";
import { ChinhTri14 } from "./section14";
import { ChinhTri2 } from "./section2";
import { ChinhTri3 } from "./section3";
import { ChinhTri4 } from "./section4";
import { ChinhTri5 } from "./section5";
import { ChinhTri6 } from "./section6";
import { ChinhTri7 } from "./section7";
import { ChinhTri8 } from "./section8";
import { ChinhTri9 } from "./section9";

export const allChinhTri = {
  name: "Môn chính trị",
  allQuiz: [
    ChinhTri1,
    ChinhTri2,
    ChinhTri3,
    ChinhTri4,
    ChinhTri5,
    ChinhTri6,
    ChinhTri7,
    ChinhTri8,
    ChinhTri9,
    ChinhTri10,
    ChinhTri11,
    ChinhTri12,
    ChinhTri13,
    ChinhTri14,
    final,
    {
      name: "Bài tổng hợp",
      quizList: [
        ...ChinhTri1.quizList,
        ...ChinhTri2.quizList,
        ...ChinhTri3.quizList,
        ...ChinhTri4.quizList,
        ...ChinhTri5.quizList,
        ...ChinhTri6.quizList,
        ...ChinhTri7.quizList,
        ...ChinhTri8.quizList,
        ...ChinhTri9.quizList,
        ...ChinhTri10.quizList,
        ...ChinhTri11.quizList,
        ...ChinhTri12.quizList,
        ...ChinhTri13.quizList,
        ...ChinhTri14.quizList,
        ...final.quizList,
      ],
    },
  ],
};
