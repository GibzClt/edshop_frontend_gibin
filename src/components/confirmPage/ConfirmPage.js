import React from "react";
import "./ConfirmPage.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ConfirmPage({product, quantity, address, addressId, userId}){
  return (
    <Box id="confirm-page">
      <Box id="confirm-item">
          <Typography component="h1" variant="h1" id="confirm-item-name">{product.name}</Typography>
          <Typography>Quantity : <b>{quantity}</b></Typography>
          <Typography>Category : <b>{product.category}</b></Typography>
          <Typography className="italic">{product.description}</Typography>
          <Typography><span style={{fontSize : "30px", color : "red"}}>Total Price : </span><span className="price">{product.price * quantity}</span></Typography>
      </Box>
      <Box id="confirm-address">
        <Typography>{address}</Typography>
      </Box>
    </Box>
  )
}

export default ConfirmPage;