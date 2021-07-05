import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import houseWorkReducer from "../features/houseWorkUndoer/houseWorkSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    houseWork: houseWorkReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
