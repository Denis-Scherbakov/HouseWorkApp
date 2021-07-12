import { createSlice } from "@reduxjs/toolkit";

export interface TodoI {
  id: string;
  points: number;
  title: string;
  status: "done" | "not done";
  showMenu: Boolean;
}

export interface houseWorkState {
  todos: TodoI[];
}

const initialState: houseWorkState = {
  todos: [
    {
      id: "1",
      points: 125,
      title: "Jijanut realno",
      status: "not done",
      showMenu: false,
    },
    {
      id: "2",
      points: 100,
      title: "sperma",
      status: "not done",
      showMenu: false,
    },
    {
      id: "3",
      points: 50,
      title: "Tupa navalit repa",
      status: "not done",
      showMenu: false,
    },
    {
      id: "4",
      points: 75,
      title: "hahahahaha",
      status: "not done",
      showMenu: false,
    },
    {
      id: "5",
      points: 50,
      title: "azaza",
      status: "not done",
      showMenu: false,
    },
    {
      id: "6",
      points: 50,
      title: "put away old toys to white boxes on the balkoney",
      status: "not done",
      showMenu: false,
    },
  ],
};

export const houseWorkSlice = createSlice({
  name: "houseWork",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          return (item.showMenu = !item.showMenu);
        }
        return state;
      });
    },
    completeTask: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          return (item.status = "done");
        }
        return state;
      });
    },
  },
});

export default houseWorkSlice.reducer;
export const { toggleMenu, completeTask } = houseWorkSlice.actions;
