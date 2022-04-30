import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { OptionCard } from "components/optioncard/OptionCard";
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

function MainPage() {
  const [selected, setSelected] = useState(obstacleData.map(() => null));
  const [mastery, setMastery] = useState(obstacleData.map(() => new Set()));

  const onSelect = useCallback(
    (rowIndex, colIndex) => {
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
    (rowIndex, colIndex) => {
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
