import * as React from "react";
import Box from '@mui/material/Box';
import InputBase  from "@mui/material/InputBase";
import  IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
<Box  component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 500 , height: '35px' , bgcolor: 'black' , borderRadius: 10 }}>
  <IconButton type="submit" sx={{ p: '10px' , color: 'white' }} aria-label="search">
    <SearchIcon/>
  </IconButton>
  <InputBase 
   sx={{ ml: 1, flex: 1 , color: 'white'}}
   placeholder="Find elements, users and activities"
   inputProps={{ 'aria-label': 'Find elements, users and activities' }}></InputBase> 
</Box>
  );
}


export default SearchBar;