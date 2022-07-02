import { Grid } from "@mui/material";
import { ObstacleContext } from "components/App";
import { SubTitle } from "components/shared/SubTitle";
import { useContext } from "react";
import { OptionCard } from "./OptionCard";

const range = (length: number) => [...new Array(length).keys()];

const OptionCardGridRow = ({ rowIndex }: { rowIndex: number }) => {
  const obstacles = useContext(ObstacleContext);
  const rowLength = obstacles[rowIndex].length;

  return (
    <>
      <SubTitle>Obstacle Slot {rowIndex + 1}</SubTitle>
      <Grid container justifyContent="center" spacing={2}>
        {range(rowLength).map((_i, index) => (
          <Grid item xs={3} key={index}>
            <OptionCard slot={rowIndex} number={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const OptionCardGrid = () => {
  const obstacles = useContext(ObstacleContext);
  const rows = obstacles.length;

  console.log(
    obstacles.map((obstacleRow) =>
      Object.fromEntries(
        obstacleRow.map((_obstacle, index): [string, boolean] => [
          index.toString(),
          false,
        ])
      )
    )
  );

  return (
    <>
      {range(rows).map((_i, index) => (
        <OptionCardGridRow rowIndex={index} key={index} />
      ))}
    </>
  );
};
