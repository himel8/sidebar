import { Box } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/animation.json";

const UploadSvg = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Box
      onClick={() => document.getElementById("fileInput").click()}
      sx={{ width: "100%", cursor: "pointer" }}
    >
      <Lottie options={animationOptions} />
    </Box>
  );
};

export default UploadSvg;
