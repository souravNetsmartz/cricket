import { Box } from "@mui/material";
import MyAppBar from "../../component/appBar";
import CricketBowlerAccordion from "../../component/cricketBowlerAccordian";
import CricketFielderAccordion from "../../component/cricketFielderAccordian";
import CricketT20BatsmanAccordion from "../../component/cricketT20BatsmanAccordian";
import Header from "../../component/header";
import { useT20BatsmanQuery } from "../../feature/api/T20Batsman";
import { useT20BowlerQuery } from "../../feature/api/T20Bowler";
import { useT20FielederQuery } from "../../feature/api/T20Fielder";

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
function T20() {
  const T20BatsmanData = useT20BatsmanQuery();
  const T20BowlerData = useT20BowlerQuery();
  const T20FielderData = useT20FielederQuery();

  const T20Batsman = T20BatsmanData?.data?.data;
  const T20Bowler = T20BowlerData?.data?.data;
  const T20Fielder = T20FielderData?.data?.data;

  return (
    <div>
      <MyAppBar title="T20 Cricket" />
      <Header title="Top Batsman" />
      <Box component={"div"}>
        {T20Batsman?.map((item: any, index: any) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketT20BatsmanAccordion
                title={item.title}
                description={item.data}
              />
            </Box>
          );
        })}
      </Box>
      {/* Bowler */}
      <Header title="Top Bowler" />
      <Box component={"div"}>
        {T20Bowler?.map((item: any, index: any) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketBowlerAccordion
                title={item.title}
                description={item.data}
              />
            </Box>
          );
        })}
      </Box>

      {/* Fielder */}
      <Header title="Top Fielder" />
      <Box component={"div"} paddingBottom={5}>
        {T20Fielder?.map((item: any, index: any) => {
          return (
            <Box sx={{ margin: "0.5rem 5rem 0 5rem" }}>
              <CricketFielderAccordion
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

export default T20;
