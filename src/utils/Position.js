import { Box } from "@mui/material";
import React, { useState } from "react";
import GroupTitle from "./GroupTitle";
import Range from "./Range";

const Position = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ padding: "0 20px" }}>
      <GroupTitle title={"Position"} setOpen={setOpen} open={open} />
      {open && (
        <Box>
          <Range value={0} name={"x"} />
          <Range value={0} name={"y"} />
          <Range value={0} name={"z"} />
        </Box>
      )}
    </Box>
  );
};

export default Position;
