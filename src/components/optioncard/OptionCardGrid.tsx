import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
} from "@mui/material";
import { ObstacleContext } from "components/App";
import { SubTitle } from "components/shared/SubTitle";
import { useContext } from "react";
import { OptionCard } from "./OptionCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "state/store";

const range = (length: number) => [...new Array(length).keys()];

const OptionCardGridRowTitle = ({ rowIndex }: { rowIndex: number }) => {
  const obstacles = useContext(ObstacleContext);
  const selectedIndex = useAppSelector(
    (state) => state.selectedObstacles[rowIndex]
  );

  return (
    <SubTitle>
      Obstacle Slot {rowIndex + 1}
      {selectedIndex !== null
        ? ` - ${obstacles[rowIndex][selectedIndex].name}`
        : ""}
    </SubTitle>
  );
};

const OptionCardGridRow = ({ rowIndex }: { rowIndex: number }) => {
  const obstacles = useContext(ObstacleContext);
  const rowLength = obstacles[rowIndex].length;

  return (
    <Accordion className="test123" defaultExpanded sx={{ width: "100%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <OptionCardGridRowTitle rowIndex={rowIndex} />
      </AccordionSummary>
      <AccordionDetails>
        <Grid container justifyContent="center" spacing={2}>
          {range(rowLength).map((_i, index) => (
            <Grid item xs={3} key={index}>
              <OptionCard slot={rowIndex} number={index} />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export const OptionCardGrid = () => {
  const obstacles = useContext(ObstacleContext);
  const rows = obstacles.length;

  return (
    <Box>
      {range(rows).map((_i, index) => (
        <OptionCardGridRow rowIndex={index} key={index} />
      ))}
    </Box>
  );
};
