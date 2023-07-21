import React, { useState } from "react";
import { Box, Stack, TextField, Typography, Button, RadioGroup, FormControlLabel, FormControl, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADD_BOOKS_DATA_QUERY } from "../../container/Home/function/common";
import { useMutation } from "@apollo/client";

const AddBookComponent = () => {
  const [payLoad, setPayLoad] = useState({
    name: "",
    auther: "",
    price: "",
    availability: true,
    introduction: "",
  })
  const navigate = useNavigate()
  const [addBookQuery, { loading, error, data }] = useMutation(ADD_BOOKS_DATA_QUERY)
  const handleChange = (event) => {
    let key = event.target.id
    let value = event.target.value
    payLoad[key] = value
    setPayLoad({ ...payLoad })
  }
  const handleSave = () => {
    console.log("addbooks", payLoad)
    addBookQuery({
      variables: {
        name: payLoad.name,
        auther: payLoad.auther,
        price: parseInt(payLoad.price),
        availability: payLoad.availability,
        introduction: payLoad.introduction
      }
    });
    setPayLoad({
      id: "",
      name: "",
      auther: "",
      price: "",
      availability: true,
      introduction: "",
    })
  }
  const handleCancle = () => {
    setPayLoad({
      id: "",
      name: "",
      auther: "",
      price: "",
      availability: true,
      introduction: "",
    })
  }
  return (
    <Box>
      <Typography variant="h3" padding={"16px"}>Add Book</Typography>
      <Button variant="outlined" onClick={() => navigate("/home")}>Home</Button>
      <Stack direction={"column"} gap={"16px"} justifyContent={"left"} paddingX={"32px"}>
        <Typography sx={{ textAlign: "left" }}>Name</Typography>
        <TextField id="name" value={payLoad.name} onChange={handleChange} />
        <Typography sx={{ textAlign: "left" }}>Auther</Typography>
        <TextField id="auther" value={payLoad.auther} onChange={handleChange} />
        <Typography sx={{ textAlign: "left" }}>Price</Typography>
        <TextField id="price" value={payLoad.price} onChange={handleChange} />
        <Typography sx={{ textAlign: "left" }}>Availability</Typography>
        <FormControl>
          <RadioGroup
            id="availability"
            name="availability"
            value={payLoad.availability}
            onChange={handleChange}
          >
            <FormControlLabel value={true} control={<Radio />} label="true" />
            <FormControlLabel value={false} control={<Radio />} label="false" />
          </RadioGroup>
        </FormControl>
        <Typography sx={{ textAlign: "left" }}>Introduction</Typography>
        <TextField id="introduction" value={payLoad.introduction} onChange={handleChange} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "right"
          }}
        >
          <Button variant="outlined" onClick={handleCancle}>Cancle</Button>
          <Button variant="contained" onClick={handleSave}>Add</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default AddBookComponent;