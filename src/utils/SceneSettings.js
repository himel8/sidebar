import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../assets/wallpaper/1.jpg";
import img10 from "../assets/wallpaper/10.jpg";
import img11 from "../assets/wallpaper/11.jpg";
import img12 from "../assets/wallpaper/12.jpg";
import img13 from "../assets/wallpaper/13.jpg";
import img14 from "../assets/wallpaper/14.jpg";
import img15 from "../assets/wallpaper/15.jpg";
import img16 from "../assets/wallpaper/16.jpg";
import img17 from "../assets/wallpaper/17.jpg";
import img18 from "../assets/wallpaper/18.jpg";
import img19 from "../assets/wallpaper/19.jpg";
import img2 from "../assets/wallpaper/2.jpg";
import img20 from "../assets/wallpaper/20.jpg";
import img21 from "../assets/wallpaper/21.jpg";
import img22 from "../assets/wallpaper/22.jpg";
import img23 from "../assets/wallpaper/23.jpg";
import img24 from "../assets/wallpaper/24.jpg";
import img25 from "../assets/wallpaper/25.jpg";
import img26 from "../assets/wallpaper/26.jpg";
import img27 from "../assets/wallpaper/27.jpg";
import img28 from "../assets/wallpaper/28.jpg";
import img29 from "../assets/wallpaper/29.jpg";
import img3 from "../assets/wallpaper/3.jpg";
import img30 from "../assets/wallpaper/30.jpg";
import img4 from "../assets/wallpaper/4.jpg";
import img5 from "../assets/wallpaper/5.jpg";
import img6 from "../assets/wallpaper/6.jpg";
import img7 from "../assets/wallpaper/7.jpg";
import img8 from "../assets/wallpaper/8.jpg";
import img9 from "../assets/wallpaper/9.jpg";
import Background from "./Background";
import Colors from "./Colors";
import GroupTitle from "./GroupTitle";
import Range from "./Range";
import FloorSwitch from "./Switch";

const imgList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
];
const bgList = [
  { name: "Solid" },
  { name: "Linear Gradient" },
  { name: "Radial Gradient" },
  { name: "Wallpaper" },
];

// const ColoredSwitch = withStyles({
//   switchBase: {
//     color: "#fff", // Set your desired color here
//     "&$checked": {
//       color: "#fff", // Set your desired checked color here
//     },
//     "&$checked": {
//       color: "#222", // Set your desired track color here
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

const ImgList = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SceneSettings = ({ ismobile }) => {
  const [open, setOpen] = useState(false);
  const [activeBg, setActiveBg] = useState(bgList[0].name);

  return (
    <Box sx={{ padding: "0 20px" }}>
      <GroupTitle title={"Scene settings"} setOpen={setOpen} open={open} />
      {open && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              gap: "10px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Background</Typography>
            <Background
              activeBg={activeBg}
              setActiveBg={setActiveBg}
              bgList={bgList}
            />
          </Box>
          {activeBg !== "Wallpaper" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>Color</Typography>
              {activeBg === "Linear Gradient" ||
              activeBg === "Radial Gradient" ? (
                <Box sx={{ display: "flex" }}>
                  <Colors colors={{ color: "#fff" }} top={190} left={35} />
                  <Colors colors={{ color: "#222" }} top={190} left={35} />
                </Box>
              ) : (
                <Colors
                  colors={{ color: "#fff" }}
                  top={190}
                  left={ismobile ? 35 : 100}
                />
              )}
            </Box>
          )}

          {/* angel */}
          {activeBg === "Linear Gradient" && (
            <Box>
              <Range value={0} name={"Angle"} />
            </Box>
          )}

          {/* wallpaper */}
          {activeBg === "Wallpaper" && (
            <Grid container spacing={2}>
              {imgList.map((item, index) => (
                <Grid item xs={2} sm={4} md={1.33} key={index}>
                  <ImgList src={item} alt="" />
                </Grid>
              ))}
            </Grid>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              marginTop: "5px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Floor shadow</Typography>
            <FloorSwitch />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SceneSettings;
