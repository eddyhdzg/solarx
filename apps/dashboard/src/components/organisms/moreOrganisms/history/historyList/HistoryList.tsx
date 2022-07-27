import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SavingsIcon from "@mui/icons-material/Savings";
import { useUser } from "reactfire";
import { useUserHistory, useFormatedUserHistory } from "hooks";
import { Link } from "react-router-dom";

export default function HistoryList() {
  const user = useUser();
  const { data } = useUserHistory(user.data?.uid);
  const displayUserHistory = useFormatedUserHistory(data);

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
                  ml: {
                    sm: 2,
                  },
                }}
              >
                {month}
              </ListSubheader>
            }
            sx={{
              pb: 5,
              position: "sticky",
              top: 0,
            }}
          >
            {transactions.map((transaction) => {
              return (
                <ListItemButton
                  key={transaction.id}
                  component={Link}
                  to={`/more/history/receipt?id=${transaction.id}`}
                >
                  <ListItemAvatar>
                    <Avatar src={transaction.avatar}>
                      <SavingsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Box
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  >
                    <ListItemText
                      primary={transaction.title}
                      secondary={transaction.date}
                      sx={{
                        textTransform: "capitalize",
                        whiteSpace: "nowrap",
                        minWidth: "auto",
                      }}
                    />
                    <Box>
                      <ListItemText
                        primary={transaction.value}
                        secondary={transaction.description}
                        sx={{
                          textAlign: "right",
                          [` .MuiListItemText-primary`]: {
                            fontWeight: 700,
                          },
                          [` .MuiListItemText-secondary`]: {
                            pl: 1.5,
                          },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ChevronRightIcon
                        sx={{
                          ml: 2,
                        }}
                      />
                    </Box>
                  </Box>
                </ListItemButton>
              );
            })}
          </List>
        );
      })}
    </>
  );
}
