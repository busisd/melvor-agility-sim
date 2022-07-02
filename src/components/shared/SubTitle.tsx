import { Typography } from "@mui/material";
import { ReactNode } from "react";

export const SubTitle = ({ children }: { children: ReactNode }) => (
  <Typography variant="h4" sx={{ py: 0 }}>
    {children}
  </Typography>
);
