import { Box } from "@mui/material";
import MyAppBar from "../../component/appBar";
import CricketAccordion from "../../component/cricketAccordian";
import Header from "../../component/header";

const questionDetails = [
  {
    title:
      "Who are the top 5 batsmen with the highest career runs in the database?",
    description:
      "This section provides information about the top 5 batsmen in the database who have scored the highest career runs.",
  },
  {
    title:
      "Who are the top 5 players with the most 4s (fours) in the provided dataset?",
    description:
      "This section provides information about the top 5 players who have hit the most 4s (fours) in the dataset.",
  },
  {
    title:
      "Who are the top 5 players with the most 6s (sixes) in the provided dataset?",
    description:
      "This section provides information about the top 5 players who have hit the most 6s (sixes) in the dataset.",
  },
  {
    title:
      "Among the top 5 batsmen, who has the highest career batting average (Ave)?",
    description:
      "This section identifies the batsman among the top 5 with the highest career batting average (Ave).",
  },
  {
    title: "How many centuries (100s) were scored by the top 5 batsmen?",
    description:
      "This section provides the total number of centuries (100s) scored by the top 5 batsmen in the dataset.",
  },
  {
    title: "Who has the highest individual score (HS) among the top 5 batsmen?",
    description:
      "This section identifies the batsman among the top 5 with the highest individual score (HS) in their career.",
  },
  {
    title:
      "What is the combined total of half-centuries (50s) scored by the top 5 batsmen?",
    description:
      "This section calculates the combined total of half-centuries (50s) scored by the top 5 batsmen in the dataset.",
  },
];
function ODI() {
  return (
    <div>
      <MyAppBar title="ODI Cricket" />
      <Header title="Top Batsman" />
      <Box component={"div"} paddingBottom={5}>
        {questionDetails.map((item, index) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketAccordion
                title={item.title}
                description={item.description}
              />
            </Box>
          );
        })}
      </Box>
      {/* Bowler */}
      <Header title="Top Bowler" />
      <Box component={"div"} paddingBottom={5}>
        {questionDetails.map((item, index) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketAccordion
                title={item.title}
                description={item.description}
              />
            </Box>
          );
        })}
      </Box>

      {/* Fielder */}
      <Header title="Top Fielder" />
      <Box component={"div"} paddingBottom={5}>
        {questionDetails.map((item, index) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketAccordion
                title={item.title}
                description={item.description}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default ODI;
