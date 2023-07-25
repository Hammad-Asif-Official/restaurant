import React from "react";
import Layouts from "../components-layout/Layouts";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layouts>
      <Box  
      sx={{
        my:15,
        textAlign:'center',
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify"
        },
        "@media (max-width:600px)":{
          mr:0,
          "& h4":{
            fontSize:"2rem",
          }
        }
      }}
      >
        <Typography variant="h4">Welcome To MY Resturant</Typography>
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
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eius
          sint aliquid delectus iusto autem voluptatum ratione molestias non id
          consequuntur deserunt, tempora earum, odio neque ex dolor. Voluptate
          doloribus molestias reprehenderit, harum, nostrum aspernatur libero
          iste autem sit recusandae soluta optio hic corrupti magnam. Dicta unde
          necessitatibus, voluptates labore impedit excepturi delectus
          recusandae cum nam esse at? Commodi distinctio ea labore fugit
          accusamus, ducimus aliquid quisquam nihil expedita eveniet architecto
          voluptatem? Quo excepturi quasi distinctio sit facilis odio
          perspiciatis in explicabo eius voluptas non eos doloremque impedit
          unde reprehenderit, quam laudantium rem sint deleniti qui sequi nemo
          quis amet!
        </p>
      </Box>
    </Layouts>
  );
};

export default About;
