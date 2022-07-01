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
import { BonusType } from "data/data";

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
  title,
  bonuses,
  selected,
  onSelect,
  masteryChecked,
  onMasteryCheck,
}: {
  title: string;
  bonuses: BonusType[] | null;
  selected: boolean;
  onSelect: () => void;
  masteryChecked: boolean;
  onMasteryCheck: () => void;
}) => (
  <Card
    sx={{
      backgroundColor: selected ? "grey.800" : "background.default",
    }}
  >
    <CardHeader title={title} sx={{ pb: 0 }} style={{ textAlign: "center" }} />
    <CardContent sx={{ py: 0 }}>
      <Typography color="text.secondary">
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={masteryChecked}
              onChange={onMasteryCheck}
            />
          }
          label="Mastery 99"
        />
      </Typography>
      <BonusList bonuses={bonuses} masteryChecked={masteryChecked} />
    </CardContent>
    <CardActions sx={{ pt: 0 }}>
      <Button variant={selected ? "contained" : "outlined"} onClick={onSelect}>
        {selected ? "Remove obstacle" : "Build obstacle"}
      </Button>
    </CardActions>
  </Card>
);
