import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useNavigate } from "react-router-dom";
import { DELETE_BOOKS_DATA_QUERY } from "../../container/Home/function/common";
import { useMutation } from "@apollo/client";
import { addEditBook } from "../../modules/reducer";
import { useDispatch } from "react-redux";

const BookDisplayCard = ({ bookData }) => {
  const navigate = useNavigate()
  const [deleteBookQuery, { loading, error, data }] = useMutation(DELETE_BOOKS_DATA_QUERY)
  const dispatch = useDispatch()
  const handleEdit = () => {
    dispatch(addEditBook(bookData))
    navigate("/editbook")
  }
  const handleDelete = () => {
    const bookId = bookData.id
    console.log("event.target.id", bookId)
    deleteBookQuery({ variables: { id: bookId } });
  }
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
      <Stack direction={"row"} gap={"8px"} alignItems={"right"}>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </Stack>
      <Typography sx={{ textAlign: "left" }}>{bookData.name}</Typography>
      <Typography sx={{ textAlign: "left" }} >{bookData.auther}</Typography>
      <Typography sx={{ textAlign: "left" }}>{bookData.price}</Typography>
      <Typography sx={{ textAlign: "left" }}>{bookData.introduction}</Typography>
    </Box>
  )
}

export default BookDisplayCard;