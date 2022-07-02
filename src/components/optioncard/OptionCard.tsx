import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { BonusString } from "components/shared/BonusString";
import { BonusType, obstacleData } from "data/data";
import { useCallback } from "react";
import { setMastery } from "state/masterySlice";
import { selectObstacle } from "state/selectedObstaclesSlice";
import { useAppDispatch, useAppSelector } from "state/store";

const shouldHalveBonus = (bonus: BonusType, masteryChecked: boolean) =>
  masteryChecked && bonus.amount < 0;

const halveDownsidesIfMastery = (bonus: BonusType, masteryChecked: boolean) =>
  shouldHalveBonus(bonus, masteryChecked)
    ? { ...bonus, amount: bonus.amount / 2 }
    : bonus;

const BonusList = ({
  bonuses,
  masteryChecked,
}: {
  bonuses: BonusType[] | null;
  masteryChecked: boolean;
}) => (
  <List dense>
    {bonuses?.map((bonus, index) => (
      <ListItem key={index}>
        <ListItemText
          sx={{
            fontStyle: shouldHalveBonus(bonus, masteryChecked)
              ? "italic"
              : "normal",
          }}
          primary={
            <BonusString
              bonus={halveDownsidesIfMastery(bonus, masteryChecked)}
            />
          }
        />
      </ListItem>
    )) ?? (
      <ListItem>
        <ListItemText primary={`None`} />
      </ListItem>
    )}
  </List>
);

export const OptionCard = ({
  slot,
  number,
}: {
  slot: number;
  number: number;
}) => {
  const selected = useAppSelector(
    (state) => state.selectedObstacles[slot] === number
  );
  const masteryChecked = useAppSelector((state) => state.mastery[slot][number]);
  const dispatch = useAppDispatch();

  const onSelect = useCallback(
    () => dispatch(selectObstacle({ slot, number })),
    [dispatch, number, slot]
  );
  const onMasteryToggle = useCallback(
    () => dispatch(setMastery({ slot, number })),
    [dispatch, number, slot]
  );

  return (
    <Card
      sx={{
        backgroundColor: selected ? "grey.800" : "background.default",
      }}
    >
      <CardHeader
        title={obstacleData[slot][number].name}
        sx={{ pb: 0 }}
        style={{ textAlign: "center" }}
      />
      <CardContent sx={{ py: 0 }}>
        <Typography color="text.secondary">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={masteryChecked}
                onChange={onMasteryToggle}
              />
            }
            label="Mastery 99"
          />
        </Typography>
        <BonusList
          bonuses={obstacleData[slot][number].bonuses}
          masteryChecked={masteryChecked}
        />
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        <Button
          variant={selected ? "contained" : "outlined"}
          onClick={onSelect}
        >
          {selected ? "Remove obstacle" : "Build obstacle"}
        </Button>
      </CardActions>
    </Card>
  );
};
