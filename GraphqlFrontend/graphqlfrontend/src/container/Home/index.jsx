import React from "react";
import { GET_BOOKS_DATA_QUERY } from "./function/common";
import { useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import BookDisplayCard from "../../component/BookDisplayCard";

const Home = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_DATA_QUERY, { errorPolicy: "all", fetchPolicy: "no-cache" })
  console.log("first", data?.allBooks)
  return (
    <Box>
      <Typography variant="h1">Books List</Typography>
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