import {
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { OptionCardGrid } from "components/optioncard/OptionCardGrid";
import { useCallback, useState } from "react";
import { obstacleData } from "data/data";
import { SubTitle } from "components/shared/SubTitle";
import { BonusSummary } from "components/bonussummary/BonusSummary";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export type SelectedArrayType = (number | null)[];
export type MasteryArrayType = Set<number>[];
export type CardCallbackFunction = (
  rowIndex: number,
  columnIndex: number
) => void;

function MainPage() {
  const [selected, setSelected] = useState<SelectedArrayType>(
    obstacleData.map(() => null)
  );
  const [mastery, setMastery] = useState<MasteryArrayType>(
    obstacleData.map(() => new Set<number>())
  );

  const onSelect = useCallback(
    (rowIndex: number, colIndex: number) => {
      setSelected((prev) => {
        const newSelected = prev[rowIndex] === colIndex ? null : colIndex;

        return [
          ...prev.slice(0, rowIndex),
          newSelected,
          ...prev.slice(rowIndex + 1),
        ];
      });
    },
    [setSelected]
  );

  const onMasteryCheck = useCallback(
    (rowIndex: number, colIndex: number) => {
      setMastery((prev) => {
        const newMastery = new Set(prev[rowIndex]);
        if (newMastery.has(colIndex)) {
          newMastery.delete(colIndex);
        } else {
          newMastery.add(colIndex);
        }

        return [
          ...prev.slice(0, rowIndex),

          newMastery,
          ...prev.slice(rowIndex + 1),
        ];
      });
    },
    [setMastery]
  );

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Stack
          direction="column"
          spacing={3}
          sx={{ px: "10vw" }}
          alignItems="center"
        >
          <Typography variant="h2">Melvor Idle Agility Simulator</Typography>
          <SubTitle>All active bonuses</SubTitle>
          <BonusSummary
            data={obstacleData}
            selected={selected}
            mastery={mastery}
          />
          <OptionCardGrid
            data={obstacleData}
            selected={selected}
            onSelect={onSelect}
            mastery={mastery}
            onMasteryCheck={onMasteryCheck}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
