import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Typography,
  ListSubheader,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SavingsIcon from "@mui/icons-material/Savings";
import { useUser } from "reactfire";
import { useDisplayUserHistory, useUserHistory } from "hooks";

export default function HistoryList() {
  const user = useUser();
  const { data } = useUserHistory(user.data?.uid);
  const displayUserHistory = useDisplayUserHistory(data);

  return (
    <>
      {displayUserHistory.map(([month, transactions]) => {
        return (
          <List
            key={month}
            aria-labelledby="history-list"
            subheader={
              <ListSubheader
                component="div"
                id="history-list"
                sx={{
                  lineHeight: "unset",
                  mb: 1,
                  textTransform: "capitalize",
                }}
              >
                {month}
              </ListSubheader>
            }
            sx={{
              pb: 5,
            }}
          >
            {transactions.map((transaction) => {
              return (
                <ListItemButton key={transaction.date}>
                  <ListItemAvatar>
                    <Avatar>
                      <SavingsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={transaction.title}
                    secondary={transaction.date}
                  />
                  <ListItemSecondaryAction>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1">
                          {transaction.value}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {transaction.description}
                        </Typography>
                      </Box>
                      <ChevronRightIcon
                        sx={{
                          ml: 2,
                        }}
                      />
                    </Box>
                  </ListItemSecondaryAction>
                </ListItemButton>
              );
            })}
          </List>
        );
      })}
    </>
  );
}
