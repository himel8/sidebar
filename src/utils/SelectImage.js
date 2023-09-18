import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

//style components
const MainBox = styled.div`
  position: relative;
  padding: 0 10px;
  width: 100%;
  height: 95px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  position: absolute;
  width: 95%;
  padding: 0 10px;

  &:hover {
    background-color: #e5e7eb;
  }
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  img {
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
`;
const SelectText = styled.h6`
  font-size: 14px;
`;

const SelectModel = styled.div`
  position: absolute;
  width: 95%;
  top: 70px;
  z-index: 100;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px 10px;
  border-radius: 15px;
`;
const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`;
const Item = styled.div`
  border: 1px solid #f7f7f7;
  cursor: pointer;
  border-radius: 5px;
`;
const SelectImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
`;

const options = [
  { label: "Hoodie", img: img1 },
  { label: "Woman-t-shirt", img: img2 },
  { label: "Man-t-shirt", img: img3 },
  { label: "Sweatshirt", img: img4 },
  { label: "Puffer jacket", img: img5 },
  { label: "Zipped jacket", img: img6 },
  { label: "Jacket Opened", img: img7 },
  { label: "Bucket hat", img: img8 },
  // Add more options as needed
];

const SelectImage = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    setSelectedOption(item);
    setOpen(false);
  };

  console.log(selectedOption);
  // Define your options here

  return (
    <MainBox>
      <SelectContainer onClick={() => setOpen(!open)}>
        <SelectBox>
          <img src={selectedOption.img} alt="" />
          <SelectText>{selectedOption.label}</SelectText>
        </SelectBox>
        <BiChevronDown />
      </SelectContainer>

      {open && (
        <SelectModel>
          <ItemGrid>
            {options.map((item, index) => (
              <Item key={index}>
                <SelectImg onClick={() => handleClick(item)}>
                  <img src={item.img} alt="" />
                </SelectImg>
              </Item>
            ))}
          </ItemGrid>
        </SelectModel>
      )}
    </MainBox>
  );
};

export default SelectImage;
