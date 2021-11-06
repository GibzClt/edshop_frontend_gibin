import React, { useEffect, useState } from "react";
import NavigationBar from "../../common/navigationBar/NavigationBar";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./ProductsPage.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import products from '../../assets/products.json';
import {Select, MenuItem} from "@mui/material"

function ProductsPage({isAdmin}){
  const categories = ['All', 'Apparel', 'Electronics', 'Footwear', 'Personal Care'];
  const [toggleValue, setToggleValue] = useState('All');
  const [selectValue, setSelectValue] = useState('default');
  
  const handleChange=(event, type)=>{
    const {value} = event.target;
    type === "toggle" ? setToggleValue(value) : setSelectValue(value);
  }

  return(
    <>
      <NavigationBar />
        <div id="toggle-btn-container">
          <ToggleButtonGroup exclusive={true} value={toggleValue} onChange={e=>handleChange(e,"toggle")}>
            {categories.map(item=>(
              <ToggleButton value={item}>{item}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        <div id="select-container">
          <Select
            sx={{width : "20%"}}
            onChange={e=>handleChange(e,"select")}
            value={selectValue}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="price-htol">Price : High to Low</MenuItem>
            <MenuItem value="price-ltoh">Price : Low to High</MenuItem>
            <MenuItem value="newest">Price : Newest</MenuItem>
          </Select>
        </div>
        <Grid id="grid-container" container columns={8} columnSpacing={5} rowSpacing={5}>
          {products.map(item=>(
            <Grid item lg={2} md={2} xs={2} sx={{display : "flex"}} >
                <Card sx={{display: 'flex', flexDirection: 'column'}}>
                  <div>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.imageURL}
                    alt={item.name}
                  />
                  </div>
                  <CardContent>
                    <div className="card-header">
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {`Rs ${item.price}`}
                      </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{marginTop : "auto"}}>
                      <div className="btns-container">
                        <Button variant="contained" size="small">Buy</Button>
                        {isAdmin && 
                        <ButtonGroup variant="string">
                          <Button size="small"><EditIcon /></Button>
                          <Button size="small"><DeleteIcon /></Button>
                        </ButtonGroup>}
                      </div>
                  </CardActions>
                </Card>
            </Grid>
          ))}
        </Grid>
    </>
  )
}

export default ProductsPage;