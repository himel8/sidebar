import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";
import { default as Basic, default as Basic2 } from "../assets/type/basic.jpg";
import City from "../assets/type/city.jpg";
import Down from "../assets/type/down.jpg";
import Matelic from "../assets/type/metalic.jpg";
import Matelic2 from "../assets/type/metalic_2.jpg";
import Sunset from "../assets/type/sunset.jpg";
import Warehouse from "../assets/type/warehouse.jpg";

const SelectModel = styled.div`
  position: absolute;
  width: 70%;
  top: 160px;
  left: 0;
  z-index: 100;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5px;
  border-radius: 10px;
  transform: translate(45%, -50%);
`;

const typeList = [
  { img: Basic, name: "Basic studio" },
  { img: Basic2, name: "Basic studio 2" },
  { img: Matelic, name: "Metalic studio" },
  { img: City, name: "City" },
  { img: Sunset, name: "Sunset" },
  { img: Down, name: "Dawn" },
  { img: Warehouse, name: "Warehouse" },
  { img: Matelic2, name: "Metalic studio 2" },
];

const Type = () => {
  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState(typeList[0]);

  const colorPickerRef = useRef(null);

  const handleClick = (item) => {
    setActiveType(item);
  };

  const handleCloseColorPicker = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        // Click occurred outside the color picker, so close it
        handleCloseColorPicker();
      }
    };

    if (open) {
      // Attach the click event listener when the color picker is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the click event listener when the color picker is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#f7f7f7",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px", paddingLeft: "10px" }}>
          <img src={activeType.img} alt="" width={30} />
          <Typography sx={{ fontSize: "12px" }}>{activeType.name}</Typography>
        </Box>
        <BiChevronDown />
      </Box>
      {open && (
        <SelectModel ref={colorPickerRef}>
          {typeList?.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                gap: "8px",

                cursor: "pointer",
              }}
              onClick={() => handleClick(item)}
              key={index}
            >
              <img src={item.img} alt="" width={30} />
              <Typography sx={{ fontSize: "16px", marginY: "5px" }}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </SelectModel>
      )}
    </>
  );
};

export default Type;
