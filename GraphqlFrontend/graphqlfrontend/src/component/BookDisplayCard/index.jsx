import React from "react";
import { Box, Typography } from "@mui/material";

const BookDisplayCard = ({ bookData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        border: "1px solid black",
        borderRadius: "20px",
        padding: "16px"
      }}
    >
      <Typography sx={{ textAlign: "left" }}>{bookData.name}</Typography>
      <Typography sx={{ textAlign: "left" }} >{bookData.auther}</Typography>
      <Typography sx={{ textAlign: "left" }}>{bookData.price}</Typography>
      <Typography sx={{ textAlign: "left" }}>{bookData.introduction}</Typography>
    </Box>
  )
}

export default BookDisplayCard;