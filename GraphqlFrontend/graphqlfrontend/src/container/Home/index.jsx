import React from "react";
import { GET_BOOKS_DATA_QUERY } from "./function/common";
import { useQuery } from "@apollo/client";
import { Box, Button, Stack, Typography } from "@mui/material";
import BookDisplayCard from "../../component/BookDisplayCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_DATA_QUERY, { errorPolicy: "all", fetchPolicy: "no-cache" })
  const navigate = useNavigate()
  console.log("first", data?.allBooks)
  return (
    <Box>
      <Typography variant="h1">Books List</Typography>
      <Box>
        <Button variant="contained" onClick={() => navigate("/addbook")}>Add</Button>
      </Box>
      <Box
        sx={{
          padding: "32px"
        }}
      >
        <Stack direction={"row"} gap={"16px"}>
          {data?.allBooks?.map((item) => {
            return <BookDisplayCard bookData={item} />
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default Home;