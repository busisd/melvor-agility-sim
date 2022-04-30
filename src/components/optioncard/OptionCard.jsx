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

const BonusList = ({ bonuses }) => (
  <List dense>
    {bonuses?.map((bonus, index) => (
      <ListItem key={index}>
        <ListItemText primary={`${bonus.amount}${bonus.type}`} />
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
      <BonusList bonuses={bonuses} />
    </CardContent>
    <CardActions sx={{ pt: 0 }}>
      <Button variant={selected ? "contained" : "outlined"} onClick={onSelect}>
        {selected ? "Remove obstacle" : "Build obstacle"}
      </Button>
    </CardActions>
  </Card>
);
