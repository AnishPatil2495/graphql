import { gql } from "@apollo/client";

export const GET_BOOKS_DATA_QUERY = gql`
	query allBooks{
		allBooks{
			id 
      name
      auther 
      price 
      availability 
      introduction
	}
}
`;

