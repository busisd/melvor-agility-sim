import { Box } from "@mui/material";
import { BonusType, bonusTypeStrings } from "data/data";
import { useMemo } from "react";

export const BonusString = ({ bonus }: { bonus: BonusType }) => {
  const bonusString = useMemo(() => bonusTypeStrings[bonus.type], [bonus.type]);

  return (
    <Box
      component="span"
      sx={{ color: bonus.amount > 0 ? "success.main" : "error.light" }}
    >
      {bonus.amount > 0 ? "+" : null}
      {bonus.amount}
      {bonusString}
    </Box>
  );
};
