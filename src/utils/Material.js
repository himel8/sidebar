import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const material = [{ name: "Basic" }, { name: "Metalic" }, { name: "Clay" }];

const MaterialText = styled.p`
  font-size: 18px;
  color: ${(props) => (props.isActive ? "#000" : "#cccccc")};
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`;

const Material = ({ item }) => {
  const [active, setActive] = useState(material[0].name);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        padding: "10px 20px",
      }}
    >
      <Typography>Material</Typography>
      <Box sx={{ display: "flex", gap: "8px" }}>
        {material.map((item, index) => (
          <MaterialText
            onClick={() => setActive(item.name)}
            isActive={active === item.name}
          >
            {item.name}
          </MaterialText>
        ))}
      </Box>
    </Box>
  );
};

export default Material;
