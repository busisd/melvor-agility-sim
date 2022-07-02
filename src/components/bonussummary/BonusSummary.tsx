import { Button, Card, List, ListItem, ListItemText } from "@mui/material";
import { ObstacleContext } from "components/App";
import {
  BonusType,
  BonusTypeKey,
  bonusTypeStrings,
  ObstacleType,
} from "data/data";
import isNil from "lodash/isNil";
import { useContext, useMemo } from "react";
import { decrement, increment, incrementByAmount } from "state/counterSlice";
import { setMastery } from "state/masterySlice";
import { useAppDispatch, useAppSelector } from "state/store";
import { BonusString } from "../shared/BonusString";

const trimPercentStr = (str: string) => str.replace("%", "").trim();

const combineBonuses = (bonuses: BonusType[]) => {
  const bonusesByType: { [key in BonusTypeKey]?: BonusType } = {};

  bonuses.forEach((bonus) => {
    if (!bonusesByType[bonus.type]) {
      bonusesByType[bonus.type] = {
        amount: 0,
        type: bonus.type,
      };
    }

    bonusesByType[bonus.type]!.amount += bonus.amount;
  });

  return Object.values(bonusesByType)
    .filter((bonus) => bonus.amount !== 0)
    .sort((bonus1, bonus2) =>
      trimPercentStr(bonusTypeStrings[bonus1.type]).localeCompare(
        trimPercentStr(bonusTypeStrings[bonus2.type])
      )
    );
};

export const BonusSummary = () => {
  const obstacles = useContext(ObstacleContext);

  const selected = useAppSelector((state) => state.selectedObstacles);
  const mastery = useAppSelector((state) => state.mastery);
  const dispatch = useAppDispatch();

  const combinedBonuses = useMemo(() => {
    const selectedObstacles: (ObstacleType | null)[] = obstacles.map(
      (obstacleSection, rowIndex) => {
        const currentSelectedObstacleNumber = selected[rowIndex];

        if (isNil(currentSelectedObstacleNumber)) return null;

        const selectedObstacle = obstacleSection[currentSelectedObstacleNumber];

        return mastery[rowIndex][currentSelectedObstacleNumber]
          ? {
              ...selectedObstacle,
              bonuses:
                selectedObstacle.bonuses?.map((bonus) =>
                  bonus.amount > 0
                    ? bonus
                    : {
                        ...bonus,
                        amount: bonus.amount / 2,
                      }
                ) ?? null,
            }
          : selectedObstacle;
      }
    );
    const allBonuses = selectedObstacles
      .filter((obstacle) => !isNil(obstacle?.bonuses))
      .flatMap((obstacle) => obstacle!.bonuses!);
    return combineBonuses(allBonuses);
  }, [mastery, obstacles, selected]);

  const count = useAppSelector((state) =>
    Boolean(state.counter.value === 3).toString()
  );

  return (
    <Card sx={{ width: "80%" }}>
      {combinedBonuses.length === 0 ? (
        <List dense>
          <ListItem>None</ListItem>
        </List>
      ) : (
        <List dense>
          {combinedBonuses.map((bonus, index) => (
            <ListItem key={index}>
              <ListItemText primary={<BonusString bonus={bonus} />} />
            </ListItem>
          ))}
        </List>
      )}
      {count}
      <Button onClick={() => dispatch(increment())}>Test increment</Button>
      <Button onClick={() => dispatch(incrementByAmount(2))}>
        Test double increment
      </Button>
      <Button onClick={() => dispatch(decrement())}>Test decrement</Button>
      <Button onClick={() => dispatch(setMastery({ slot: 3, number: 3 }))}>
        Test set mastery
      </Button>
    </Card>
  );
};
