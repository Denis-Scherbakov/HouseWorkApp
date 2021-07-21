import { createSlice } from "@reduxjs/toolkit";

export interface TodoI {
  id: string;
  points: number;
  title: string;
  status: "done" | "not done";
  showMenu: Boolean;
}

export interface AccountsI {
  id: string;
  pictureIndex: number;
  name: string;
  age: number;
  points: number;
  password: string;
  status: "logged in" | "logged off";
  showAcc: boolean;
  showPasswordInput: boolean;
  isAdmin: boolean;
}

export interface houseWorkState {
  todos: TodoI[];
  accounts: AccountsI[];
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
  accounts: [
    {
      id: "0",
      pictureIndex: 0,
      name: "Lily",
      age: 11,
      points: 54,
      password: "lilly123",
      status: "logged off",
      showAcc: true,
      showPasswordInput: false,
      isAdmin: false,
    },
    {
      id: "1",
      pictureIndex: 1,
      name: "Jack",
      age: 31,
      points: 0,
      password: "yaPozhiloy",
      status: "logged off",
      showAcc: true,
      showPasswordInput: false,
      isAdmin: true,
    },
    {
      id: "2",
      pictureIndex: 2,
      name: "Mary",
      age: 10,
      points: 27,
      password: "marymary",
      status: "logged off",
      showAcc: true,
      showPasswordInput: false,
      isAdmin: false,
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
    toggleAccountEnter: (state, action) => {
      state.accounts.map((item) => {
        if (item.id !== action.payload) {
          return (item.showAcc = !item.showAcc);
        } else if (item.id === action.payload) {
          return (item.showPasswordInput = !item.showPasswordInput);
        }
        return state;
      });
    },
    logginInAccount: (state, action) => {
      state.accounts.map((item) => {
        if (
          action.payload === item.password &&
          item.showPasswordInput === true
        ) {
          return (item.status = "logged in");
        }
        return state;
      });
    },
  },
});

export default houseWorkSlice.reducer;
export const { toggleMenu, completeTask, toggleAccountEnter, logginInAccount } =
  houseWorkSlice.actions;
