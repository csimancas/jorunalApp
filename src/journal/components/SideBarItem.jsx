import React, { useMemo } from "react";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBarItem = ({ id, title, body }) => {
  console.log(id);

  const newTitle = useMemo(() => {
    return title.length > 15 ? `${title.slice(0, 15)}...` : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
