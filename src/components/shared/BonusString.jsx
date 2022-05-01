const { Box } = require("@mui/material");

export const BonusString = ({ bonus }) => (
  <Box sx={{ color: bonus.amount > 0 ? "success.main" : "error.light" }}>
    {bonus.amount}
    {bonus.type}
  </Box>
);
