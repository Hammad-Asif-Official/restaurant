import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Layouts from "../components-layout/Layouts";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

const Contact = () => {
  return (
    <Layouts>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam
          commodi nostrum nobis minima tenetur cum, eveniet, recusandae
          laboriosam delectus culpa tempore nihil assumenda aut sit aliquid
          saepe? Deleniti vel numquam obcaecati fugiat a voluptatum nobis
          distinctio aspernatur quidem nulla molestiae commodi dolor beatae,
          nemo aut quo cum incidunt voluptas? Magnam consectetur laboriosam
          necessitatibus reiciendis, voluptatibus quam, officiis non eaque natus
          recusandae hic laborum quas, veritatis ipsa ullam commodi doloremque
          omnis aut ratione nisi. Magnam ad perferendis a doloribus aut, eaque
          assumenda officiis vero sit! Quas dolorum, labore expedita nam, nisi
          inventore fugiat dolor reprehenderit nihil fugit eligendi molestias
          sit?
        </p>
      </Box>
      <Box
       sx={{
        m: 3,
        width: "600px",
        ml: 10,
        "@media (max-width:600px)": {
          width: "300px",
        },
      }}
     
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                sx={{bgcolor:"black",color:"white"}} align="center"
                >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-000-0000
               
              </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>
                
                <EmailIcon sx={{ color: "skyblue", pt: 1 }} />034928hammadasif@gmail.com
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{ color: "blue", pt: 1 }} /> 03056149325
               
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layouts>
  );
};

export default Contact;
