import { Box, Typography } from "@mui/material";
import React from "react";
import MyAppBar from "../../component/appBar";
import CricketAccordion from "../../component/cricketAccordian";
import CricketFormats from "../../component/cricketFormats";
import { useODIBatsmanQuery } from "../../feature/api/ODIBatsman";
import CricketBatsmanAccordion from "../../component/cricketBatsmanAccordian";

function Dashboard(): React.ReactElement {
  const ODIBatsmanData = useODIBatsmanQuery();
  const ODIBatsman = ODIBatsmanData?.data?.data;

  return (
    <div>
      <MyAppBar title="Cricket Board" />
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        marginTop={"1rem"}
      >
        <Typography variant="h5" fontWeight={"700"}>
          Choose Format
        </Typography>
      </Box>
      <CricketFormats />
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        marginBottom={"1rem"}
      >
        <Typography variant="h5" fontWeight={"700"}>
          Performance Analysis
        </Typography>
      </Box>
      <Box component={"div"} paddingBottom={5}>
        {ODIBatsman?.map((item: any) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketBatsmanAccordion
                title={item.title}
                description={item.data}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Dashboard;
