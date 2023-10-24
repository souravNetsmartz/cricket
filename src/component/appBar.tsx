import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
}
function MyAppBar(props: Props) {
  const { title } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
