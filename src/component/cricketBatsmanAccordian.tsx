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
function CricketBatsmanAccordion(props: Props) {
  const { title, description } = props;

  return (
    <Box component={"div"}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {description.map((item) => {
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

export default CricketBatsmanAccordion;

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
  } else if (title === "Top 5 batsmen with the highest half-centuries.") {
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
            <Typography fontWeight={"900"}>{"HalfCenturies:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.HalfCenturies}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else if (
    title === "The top 5 batsmen with the highest career batting average (Ave)."
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
            <Typography fontWeight={"900"}>{"BattingAverage:"}</Typography>
          </Box>
          <Box>
            <Typography>{item.BattingAverage}</Typography>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}
