import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";
import sectionSlice from "../features/section/sectionSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    section: sectionSlice,
  },
});
