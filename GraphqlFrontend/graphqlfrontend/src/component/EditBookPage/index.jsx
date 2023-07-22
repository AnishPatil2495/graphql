import React, { useState, useEffect } from "react";
import { Box, Stack, TextField, Typography, Button, RadioGroup, FormControlLabel, FormControl, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { EDIT_BOOKS_DATA_QUERY } from "../../container/Home/function/common";
import { useMutation } from "@apollo/client";

const EditBookComponent = () => {
  const [payLoad, setPayLoad] = useState({
    id: "",
    name: "",
    auther: "",
    price: "",
    availability: true,
    introduction: "",
  })
  const navigate = useNavigate()
  const handleChange = (event) => {
    let key = event.target.id || event.target.name
    let value = event.target.value
    payLoad[key] = value
    setPayLoad({ ...payLoad })
  }
  const bookData = useSelector(state => state.books.editBook)
  useEffect(() => {
    console.log("first", bookData)
    setPayLoad({ ...bookData })
  }, [])
  const [editBookQuery, { loading, error, data }] = useMutation(EDIT_BOOKS_DATA_QUERY)
  const handleSave = () => {
    console.log("EditBookComponent", payLoad)
    editBookQuery({
      variables: {
        id: payLoad.id,
        name: payLoad.name,
        auther: payLoad.auther,
        price: parseInt(payLoad.price),
        availability: payLoad.availability,
        introduction: payLoad.introduction
      }
    });
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
      <Typography variant="h3" padding={"16px"}>Edit Book</Typography>
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
            <FormControlLabel value={true} control={<Radio />} label="True" />
            <FormControlLabel value={false} control={<Radio />} label="False" />
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
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default EditBookComponent;