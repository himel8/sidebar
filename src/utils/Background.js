import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";

const SelectModel = styled.div`
  position: absolute;
  width: 70%;
  top: 110px;
  left: 0;
  z-index: 100;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 15px;
  border-radius: 15px;
  transform: translate(45%, -50%);
`;
const ItemSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fbfbfe;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: rgb(74, 85, 104);
  padding: 5px 8px;
  border-radius: 5px;

  &:hover {
    background-color: #e5e7eb;
  }
`;

const Background = ({ activeBg, setActiveBg, bgList }) => {
  console.log(bgList);
  const [open, setOpen] = useState(false);

  const colorPickerRef = useRef(null);

  const handleClick = (item) => {
    setActiveBg(item.name);
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
      <ItemSelectBox onClick={() => setOpen(!open)}>
        <Typography sx={{ fontSize: "14px" }}>{activeBg}</Typography>
        <BiChevronDown />
      </ItemSelectBox>
      {open && (
        <SelectModel ref={colorPickerRef}>
          {bgList?.map((item, index) => (
            <Typography
              onClick={() => handleClick(item)}
              key={index}
              sx={{ fontSize: "16px", cursor: "pointer", marginY: "5px" }}
            >
              {item.name}
            </Typography>
          ))}
        </SelectModel>
      )}
    </>
  );
};

export default Background;
