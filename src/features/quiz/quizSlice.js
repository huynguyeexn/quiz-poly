import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: null,
  quizzes: null,
  currentIndex: 0,
  mark: 0,
  totalSelected: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      let arr = [...action.payload];
      arr = arr.sort(() => 0.5 - Math.random());

      state.quizzes = arr;
      state.quiz = arr[0];
    },
    selectAnswer: (state, action) => {
      const selecteIndex = action.payload;

      if (selecteIndex === state.quiz.correct) {
        state.mark++;
      }

      state.quiz.selected = selecteIndex;
      state.quizzes[state.currentIndex] = state.quiz;
      state.totalSelected++;
    },
    nextQuiz: (state) => {
      state.currentIndex++;
      state.quiz = state.quizzes[state.currentIndex];
    },
    prevQuiz: (state) => {
      state.currentIndex--;
      state.quiz = state.quizzes[state.currentIndex];
    },
    resetQuiz: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setQuizzes, selectAnswer, nextQuiz, prevQuiz, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
