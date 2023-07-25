import React from "react";
import Layouts from "../components-layout/Layouts";
import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layouts>
      <Box sx={{display:"flex",flexWrap:"wrap" ,justifyContent:"center"}}>
        {
        MenuList.map((menu) => (
          <Card sx={{maxWidth:"390px",display:"flex",m:2}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h2" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="h6">
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ),)}
      </Box>
    </Layouts>
  );
};

export default Menu;
