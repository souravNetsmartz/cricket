import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};
export default function Header(props: Props) {
  const { title } = props;
  return (
    <div>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        marginBottom={"1rem"}
        marginTop={"1rem"}
      >
        <Typography variant="h5" fontWeight={"700"}>
          {title}
        </Typography>
      </Box>
    </div>
  );
}
