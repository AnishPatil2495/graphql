import React, { useState } from "react";
import { Box, Stack, TextField, Typography, Button, RadioGroup, FormControlLabel, FormControl, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditBookComponent = () => {
  const [payLoad, setPayLoad] = useState({
    id: "",
    name: "",
    auther: "",
    price: "",
    availability: "True",
    introduction: "",
  })
  const navigate = useNavigate()
  const handleChange = (event) => {
    let key = event.target.id || event.target.name
    let value = event.target.value
    payLoad[key] = value
    setPayLoad({ ...payLoad })
  }
  const handleSave = () => {
    console.log("EditBookComponent", payLoad)
  }
  const handleCancle = () => {
    setPayLoad({
      id: "",
      name: "",
      auther: "",
      price: "",
      availability: "True",
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
            <FormControlLabel value="True" control={<Radio />} label="True" />
            <FormControlLabel value="False" control={<Radio />} label="False" />
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