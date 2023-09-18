import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import GroupTitle from "./GroupTitle";
import Range from "./Range";
import Type from "./Type";

const Environment = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ padding: "0 20px" }}>
      <GroupTitle title={"Environment"} setOpen={setOpen} open={open} />
      {open && (
        <Box>
          {/* type */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              gap: "10px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Type</Typography>
            <Type />
          </Box>
          <Range value={0} name={"Intensity"} />
          <Range value={0} name={"Rotation"} />
        </Box>
      )}
    </Box>
  );
};

export default Environment;
