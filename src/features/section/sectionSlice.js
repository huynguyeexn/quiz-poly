import { createSlice } from "@reduxjs/toolkit";
import { allSection } from "../../data";

const initialState = {
  sections: [...allSection],
  section: null,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    selectSection: (state, action) => {
      const { sectionIndex, quizIndex } = action.payload;

      const section = state.sections[sectionIndex];

      const quiz = section.allQuiz[quizIndex];

      state.section = quiz;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectSection } = sectionSlice.actions;

export default sectionSlice.reducer;
