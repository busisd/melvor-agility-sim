import {
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { OptionCardGrid } from "components/optioncard/OptionCardGrid";
import { SubTitle } from "components/shared/SubTitle";
import { BonusSummary } from "components/bonussummary/BonusSummary";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MainPage() {
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
          <BonusSummary />
          <OptionCardGrid />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
