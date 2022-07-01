import { Grid } from "@mui/material";
import {
  CardCallbackFunction,
  MasteryArrayType,
  SelectedArrayType,
} from "components/mainpage/MainPage";
import { SubTitle } from "components/shared/SubTitle";
import { ObstacleDataType, ObstacleType } from "data/data";
import { OptionCard } from "./OptionCard";

const OptionCardGridRow = ({
  rowIndex,
  rowData,
  rowSelected,
  onSelect,
  rowMastery,
  onMasteryCheck,
}: {
  rowIndex: number;
  rowData: ObstacleType[];
  rowSelected: number | null;
  onSelect: CardCallbackFunction;
  rowMastery: Set<number>;
  onMasteryCheck: CardCallbackFunction;
}) => {
  return (
    <>
      <SubTitle>Obstacle Slot {rowIndex + 1}</SubTitle>
      <Grid container justifyContent="center" spacing={2}>
        {rowData.map((obstacle, index) => {
          return (
            <Grid item xs={3} key={index}>
              <OptionCard
                title={obstacle.name}
                bonuses={obstacle.bonuses}
                selected={rowSelected === index}
                onSelect={() => onSelect(rowIndex, index)}
                masteryChecked={rowMastery.has(index)}
                onMasteryCheck={() => onMasteryCheck(rowIndex, index)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export const OptionCardGrid = ({
  data,
  selected,
  onSelect,
  mastery,
  onMasteryCheck,
}: {
  data: ObstacleDataType;
  selected: SelectedArrayType;
  mastery: MasteryArrayType;
  onSelect: CardCallbackFunction;
  onMasteryCheck: CardCallbackFunction;
}) => (
  <>
    {data.map((rowData, index) => (
      <OptionCardGridRow
        rowData={rowData}
        rowIndex={index}
        rowSelected={selected[index]}
        onSelect={onSelect}
        rowMastery={mastery[index]}
        onMasteryCheck={onMasteryCheck}
        key={index}
      />
    ))}
  </>
);
