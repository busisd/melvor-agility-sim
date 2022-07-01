import { Card, List, ListItem, ListItemText } from "@mui/material";
import {
  MasteryArrayType,
  SelectedArrayType,
} from "components/mainpage/MainPage";
import {
  BonusType,
  BonusTypeKey,
  bonusTypeStrings,
  ObstacleDataType,
  ObstacleType,
} from "data/data";
import isNil from "lodash/isNil";
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

export const BonusSummary = ({
  data,
  selected,
  mastery,
}: {
  data: ObstacleDataType;
  selected: SelectedArrayType;
  mastery: MasteryArrayType;
}) => {
  const selectedObstacles: (ObstacleType | null)[] = data.map(
    (obstacleSection, rowIndex) => {
      const currentSelectedObstacleNumber = selected[rowIndex];

      if (isNil(currentSelectedObstacleNumber)) return null;

      const selectedObstacle = obstacleSection[currentSelectedObstacleNumber];

      if (mastery[rowIndex].has(currentSelectedObstacleNumber)) {
        return {
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
        };
      } else {
        return selectedObstacle;
      }
    }
  );
  const allBonuses = selectedObstacles
    .filter((obstacle) => !isNil(obstacle?.bonuses))
    .flatMap((obstacle) => obstacle!.bonuses!);
  const combinedBonuses = combineBonuses(allBonuses);

  return (
    <Card sx={{ width: "80%" }}>
      {allBonuses.length === 0 ? (
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
    </Card>
  );
};
