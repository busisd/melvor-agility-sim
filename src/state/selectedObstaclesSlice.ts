import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { obstacleData } from "data/data";

export type SelectedObstaclesType = (number | null)[];

const initialState: SelectedObstaclesType = obstacleData.map(() => null);

export const selectedObstaclesSlice = createSlice({
  name: "selectedObstacles",
  initialState,
  reducers: {
    selectObstacle: (
      state,
      action: PayloadAction<{ slot: number; number: number }>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state[action.payload.slot] === action.payload.number) {
        state[action.payload.slot] = null;
      } else {
        state[action.payload.slot] = action.payload.number;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectObstacle } = selectedObstaclesSlice.actions;

export default selectedObstaclesSlice.reducer;
