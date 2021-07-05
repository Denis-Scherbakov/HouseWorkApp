import { createSlice } from "@reduxjs/toolkit";

export interface TodoI {
  id: string;
  points: number;
  title: string;
  status: "done" | "not done";
}

export interface houseWorkState {
  todos: TodoI[];
}

const initialState: houseWorkState = {
  todos: [
    { id: "1", points: 125, title: "Jijanut realno", status: "not done" },
    { id: "2", points: 100, title: "sperma", status: "not done" },
    { id: "3", points: 50, title: "Tupa navalit repa", status: "not done" },
    { id: "4", points: 75, title: "hahahahaha", status: "not done" },
    { id: "5", points: 50, title: "azaza", status: "not done" },
    {
      id: "6",
      points: 50,
      title: "speeeeeeeeeeeeeeeeeeeeerma",
      status: "not done",
    },
  ],
};

export const houseWorkSlice = createSlice({
  name: "houseWork",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

export default houseWorkSlice.reducer;
