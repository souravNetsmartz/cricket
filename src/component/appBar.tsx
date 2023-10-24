import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}
function MyAppBar(props: Props) {
  const { title } = props;
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar onClick={() => navigate("/")}>
        <Typography variant="h6" fontWeight={"900"}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
