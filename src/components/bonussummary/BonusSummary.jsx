import { Card, CardContent, CardHeader, List, ListItem } from "@mui/material";

export const BonusSummary = ({ data, selected, mastery }) => {
  const selectedObstacles = data.map((obstacleSection, index) =>
    selected[index] ? obstacleSection[selected[index]] : null
  );
  const allBonuses = selectedObstacles
    .filter((obstacle) => obstacle?.bonuses)
    .flatMap((obstacle) => obstacle.bonuses);
  console.log(allBonuses);

  return (
    <Card sx={{ width: "80%" }}>
      {allBonuses.length === 0 ? (
        <List dense>
          <ListItem>None</ListItem>
        </List>
      ) : (
        <List dense>
          {allBonuses.map((bonus, index) => (
            <ListItem key={index}>
              {bonus.amount}
              {bonus.type}
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
};
