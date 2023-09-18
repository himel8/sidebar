import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ColorBOx = styled.div`
  position: absolute;
  left: 0;
  top: ${(props) => props.top}px;
  z-index: 50;
  transform: translate(${(props) => props.left}%, -50%);
`;
const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid #e1e6ed;
  margin-left: 20px;
`;
const Colors = ({ colors, top, left }) => {
  const [open, setOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState(colors.color); // Initial color

  const colorPickerRef = useRef(null);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
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
    <ColorContainer>
      {open && (
        <ColorBOx ref={colorPickerRef} top={top} left={left}>
          <SketchPicker color={selectedColor} onChange={handleColorChange} />
        </ColorBOx>
      )}
      <Circle bgColor={selectedColor} onClick={() => setOpen(!open)}></Circle>
    </ColorContainer>
  );
};

export default Colors;
