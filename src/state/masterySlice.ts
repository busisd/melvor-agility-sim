import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { obstacleData } from "data/data";

export type MasteryType = boolean[][];

const initialState: MasteryType = obstacleData.map((obstacleRow) =>
  new Array(obstacleRow.length).fill(false)
);

export const masterySlice = createSlice({
  name: "mastery",
  initialState,
  reducers: {
    setMastery: (
      state,
      action: PayloadAction<{ slot: number; number: number }>
    ) => {
      state[action.payload.slot][action.payload.number] =
        !state[action.payload.slot][action.payload.number];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMastery } = masterySlice.actions;

export default masterySlice.reducer;
