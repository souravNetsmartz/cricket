import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: string;
  description: any[];
};
function CricketT20BatsmanAccordion(props: Props) {
  const { title, description } = props;

  return (
    <Box component={"div"}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {description.map((item) => {
            console.log(
              "🚀 ~ file: cricketAccordian.tsx:29 ~ {description.map ~ item:",
              item
            );
            return (
              <>
                {PlayerInfo(title, item)}
                <Divider />
              </>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CricketT20BatsmanAccordion;

function PlayerInfo(title: string, item: any): React.JSX.Element | null {
  if (title === "The top 5 batsmen with the highest career runs.") {
    return (
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} flex={1}>
          <Box>
            <Typography fontWeight={"900"}>{"Player:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Player}</Typography>
          </Box>
        </Box>
        <Box display={"flex"} flex={1} justifyContent={"center"}>
          <Box>
            <Typography fontWeight={"900"}>{"Runs:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Runs}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else if (title === "Top 5 batsmen with the highest no. of 4s.") {
    return (
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} flex={1}>
          <Box>
            <Typography fontWeight={"900"}>{"Player:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Player}</Typography>
          </Box>
        </Box>
        <Box display={"flex"} flex={1} justifyContent={"center"}>
          <Box>
            <Typography fontWeight={"900"}>{"Fours"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Fours}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else if (title === "The top 5 batsmen with the highest no. of 6s.") {
    return (
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} flex={1}>
          <Box>
            <Typography fontWeight={"900"}>{"Player:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Player}</Typography>
          </Box>
        </Box>
        <Box display={"flex"} flex={1} justifyContent={"center"}>
          <Box>
            <Typography fontWeight={"900"}>{"Sixes:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Sixes}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}
