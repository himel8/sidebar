import { Box, Divider, IconButton, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";
import SideBarList from "./SideBarList";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NewDrawer = ({ ismobile }) => {
  const theme = useTheme();

  return (
    <>
      {!ismobile ? (
        <DrawerHeader>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton>
              {theme.direction === "ltr" ? (
                <>
                  <MdChevronLeft />
                  <Typography>Back</Typography>
                </>
              ) : (
                <MdChevronRight />
              )}
            </IconButton>
            <IconButton>
              <MdMenu />
            </IconButton>
          </Box>
        </DrawerHeader>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton>
            {theme.direction === "ltr" ? (
              <>
                <MdChevronLeft />
                <Typography>Back</Typography>
              </>
            ) : (
              <MdChevronRight />
            )}
          </IconButton>
          <IconButton>
            <MdMenu />
          </IconButton>
        </Box>
      )}
      <Divider />

      {/* Sidebar list */}
      <SideBarList ismobile={ismobile} />
    </>
  );
};

export default NewDrawer;
