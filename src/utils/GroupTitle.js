import { Box } from "@mui/material";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(26, 32, 44);

  &:hover {
    color: #222;
  }
`;

const GroupTitle = ({ title, setOpen, open }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <Title>{title}</Title>
      <BiChevronDown />
    </Box>
  );
};

export default GroupTitle;
