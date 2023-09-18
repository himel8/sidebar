import { Box, Slider, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";

const BlackAndWhiteSlider = withStyles({
  root: {
    color: "#000",
    height: "7px", // Change the track color to white
  },
  thumb: {
    backgroundColor: "white", // Change the thumb color to white
  },
  rail: {
    backgroundColor: "white", // Change the rail color to white
  },
})(Slider);

const Range = ({ value, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "8px",
        padding: "5px 0",
      }}
    >
      <Typography sx={{ fontSize: "12px" }}>{name}</Typography>
      <BlackAndWhiteSlider
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        defaultValue={value}
        aria-label="Default"
        step={0.01}
        min={-3.14}
        max={3.14}
      />
    </Box>
  );
};

export default Range;
