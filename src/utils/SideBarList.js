import { Box, Divider, List, Typography } from "@mui/material";
import React from "react";
import Colors from "./Colors";
import Environment from "./Environment";
import Material from "./Material";
import Position from "./Position";
import Rotation from "./Rotation";
import SceneSettings from "./SceneSettings";
import SelectImage from "./SelectImage";
import UploadDesign from "./UploadDesign";
const colors = [{ color: "#000" }, { color: "#fff" }, { color: "#1e1e1e" }];

const SideBarList = ({ ismobile }) => {
  return (
    <Box sx={{ padding: " 0px 0px 80px" }}>
      <List>
        <SelectImage />
      </List>

      <Divider />

      {/* select Color */}
      <List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            padding: "10px 20px",
          }}
        >
          <Typography>Colors</Typography>
          <Box sx={{ display: "flex" }}>
            {colors.map((item, index) => (
              <Colors
                colors={item}
                key={index}
                top={200}
                left={ismobile ? 40 : 40}
              />
            ))}
          </Box>
        </Box>

        {/* select Material */}

        <Material />

        {/* upload design */}
        <UploadDesign ismobile={ismobile} />
      </List>

      <Divider />

      {/* Scene settings*/}
      <List>
        <SceneSettings ismobile={ismobile} />
      </List>

      <Divider />

      {/* Environment */}
      <List>
        <Environment />
      </List>

      <Divider />

      {/* Position */}
      <List>
        <Position />
      </List>

      <Divider />

      {/* rotation */}
      <List>
        <Rotation />
      </List>
    </Box>
  );
};

export default SideBarList;
