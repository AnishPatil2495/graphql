import { gql } from "@apollo/client";

export const GET_BOOKS_DATA_QUERY = gql`
	query AllBooks{
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

export const ADD_BOOKS_DATA_QUERY = gql`
	mutation AddBooks(
    $name:String,
    $auther:String,
    $price:Int,
    $availability:Boolean,
    $introduction:String
    ){
		addBooks(
      name:$name,
      auther:$auther,
      price:$price,
      availability:$availability,
      introduction:$introduction
    ){ 
      books{
        name
        auther 
        price 
        availability 
        introduction
      }
	}
}
`;

export const EDIT_BOOKS_DATA_QUERY = gql`
	mutation UpdateBooks(
    $id:ID,
    $name:String,
    $auther:String,
    $price:Int,
    $availability:Boolean,
    $introduction:String
    ){
		updateBooks(
      id:$id,
      name:$name,
      auther:$auther,
      price:$price,
      availability:$availability,
      introduction:$introduction
    ){ 
      books{
        id
        name
        auther 
        price 
        availability 
        introduction
      }
	}
}
`;

export const DELETE_BOOKS_DATA_QUERY = gql`
	mutation DeleteBooks($id:ID,){
		deleteBooks(id:$id){
      books{
        id
      }
    }
}
`;