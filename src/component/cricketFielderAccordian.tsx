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
function CricketFielderAccordion(props: Props) {
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

export default CricketFielderAccordion;

function PlayerInfo(title: string, item: any): React.JSX.Element | null {
  if (
    title ===
    "The top 5 fielders with the most Dismissals in the provided dataset."
  ) {
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
            <Typography fontWeight={"900"}>{"Dismissals:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Dismissals}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else if (
    title ===
    "The top 5 fielders with the highest number of catches in the provided dataset."
  ) {
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
            <Typography fontWeight={"900"}>{"Catches:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Catches}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else if (
    title ===
    "The top 5 fielders with the highest number of stumpings in the provided dataset."
  ) {
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
            <Typography fontWeight={"900"}>{"Stumps:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.Stumps}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}
