import { Card, List, ListItem, ListItemText } from "@mui/material";
import { BonusString } from "components/shared/BonusString";
import isNil from "lodash/isNil";

const trimPercentStr = (str) => str.replace("%", "").trim();

const combineBonuses = (bonuses) => {
  const bonusesByType = {};

  bonuses.forEach((bonus) => {
    if (!bonusesByType[bonus.type]) {
      bonusesByType[bonus.type] = {
        amount: 0,
        type: bonus.type,
      };
    }

    bonusesByType[bonus.type].amount += bonus.amount;
  });

  return Object.values(bonusesByType)
    .filter((bonus) => bonus.amount !== 0)
    .sort((bonus1, bonus2) =>
      trimPercentStr(bonus1.type).localeCompare(trimPercentStr(bonus2.type))
    );
};

export const BonusSummary = ({ data, selected, mastery }) => {
  const selectedObstacles = data.map((obstacleSection, rowIndex) => {
    if (isNil(selected[rowIndex])) return null;

    const selectedObstacle = obstacleSection[selected[rowIndex]];
    if (mastery[rowIndex].has(selected[rowIndex])) {
      return {
        ...selectedObstacle,
        bonuses: selectedObstacle?.bonuses.map((bonus) =>
          bonus.amount > 0
            ? bonus
            : {
                ...bonus,
                amount: bonus.amount / 2,
              }
        ),
      };
    } else {
      return selectedObstacle;
    }
  });
  const allBonuses = selectedObstacles
    .filter((obstacle) => !isNil(obstacle?.bonuses))
    .flatMap((obstacle) => obstacle.bonuses);
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
