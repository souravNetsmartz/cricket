import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import T20Background from "../assets/Images/t20.jpg";
import ODIBackground from "../assets/Images/odi.jpg";
import { useNavigate } from "react-router-dom";
import ROUTES from "../utils/routes";

function CricketFormats() {
  const navigate = useNavigate();
  const handleCardClick = (format: any) => {
    // Handle the click event for T20 or ODI card

    navigate(format);
  };

  return (
    <Grid container style={gridContainerStyle} spacing={4}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardActionArea onClick={() => handleCardClick(ROUTES.t20)}>
            <CardMedia
              component="img"
              alt="T20"
              height="200" // Adjust the height as needed
              image={T20Background}
              style={cardStyles}
            />
            <CardContent>
              <Typography variant="h5" component="div" fontWeight={"700"}>
                T20 Cricket
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Twenty20 cricket format
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardActionArea onClick={() => handleCardClick(ROUTES.odi)}>
            <CardMedia
              component="img"
              alt="T20"
              height="200" // Adjust the height as needed
              image={ODIBackground}
              style={cardStyles}
            />
            <CardContent>
              <Typography variant="h5" component="div" fontWeight={"700"}>
                ODI
              </Typography>
              <Typography variant="body2" color="textSecondary">
                One Day International cricket format
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CricketFormats;

const cardStyle = {
  cursor: "pointer",
  transition: "transform 0.2s",
};

const gridContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 5rem 1.5rem 5rem",
};
const cardStyles = {
  height: 200, // Adjust the height as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
