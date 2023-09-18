import { Box, Button, Input, Modal, Typography } from "@mui/material";

import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import styled from "styled-components";
import UploadSvg from "./UploadSvg";

const ModalButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  color: #718096;
  background-color: #fbfbfe;
  border-radius: 10px;

  &:hover {
    color: #222;
    background-color: #e5e7eb;
  }
`;
const ContentBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const ButtonTitle = styled.p`
  font-size: 12px;
  text-transform: none;
  font-weight: 500;
  line-height: 24px;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 35px;
  transform: translate(-50%, -50%);
  right: 0;
  font-size: 25px;
  color: rgb(74, 85, 104);
  cursor: pointer;
`;
const SideButton = styled.p`
  font-size: 18px;
  text-transform: none;
  font-weight: 400;
  line-height: 24px;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: ${(props) =>
    props.isActive ? "rgb(74, 85, 104)" : "rgb(113, 128, 150)"};
  background-color: ${(props) => (props.isActive ? "#f1f3f6" : "")};
`;

const CustomBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.ismobile ? "60%" : "90%")};
  height: 80%;
  background-color: #fff;
  border: 2px solid #fff;
  box-shadow: 24;
  border-radius: 15px;
  overflow: hidden;
  padding: 0 4px;
`;

const UploadDesign = ({ ismobile }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Front");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  console.log(selectedFile);
  return (
    <div>
      <ModalButton onClick={handleOpen}>
        <ButtonTitle>Upload your design</ButtonTitle>
        <ButtonTitle>
          <HiOutlinePencil />
        </ButtonTitle>
      </ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ borderWidth: 0 }}
      >
        <CustomBox ismobile={ismobile}>
          {/* image */}
          <ContentBox>
            <CloseButton onClick={() => setOpen(false)}>
              <RxCross2 />
            </CloseButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <SideButton
                isActive={active === "Front"}
                onClick={() => setActive("Front")}
              >
                Front
              </SideButton>
              <SideButton
                isActive={active === "Back"}
                onClick={() => setActive("Back")}
              >
                Back
              </SideButton>
            </Box>
            {!selectedFile ? (
              <div>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />

                <UploadSvg />

                <Button
                  variant="contained"
                  component="label"
                  style={{ display: "none" }}
                  startIcon={<HiOutlinePencil />}
                >
                  Upload File
                  <Input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  />
                </Button>
              </div>
            ) : (
              <div>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected File"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
              </div>
            )}

            {/* image */}

            <Typography
              id="modal-modal-title"
              sx={{ color: "#4a5568", fontSize: "18px" }}
            >
              Upload your design here
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ color: "#a0aec0", fontSize: "16px" }}
            >
              Recommended resolution: 1920 x 1920 (1:1)
            </Typography>
          </ContentBox>
        </CustomBox>
      </Modal>
    </div>
  );
};

export default UploadDesign;
