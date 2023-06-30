import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Img from "../src/images/x-circle.svg";
import { createTheme, ThemeProvider } from "@mui/material";

import {
  Button,
  CardActions,
  CardHeader,
  TextField,
} from "@mui/material";
import CardComponent2 from "./CardComponent2";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Component2({ handleClose , isActive}) {

  return (
    
    <Card sx={{ width: "65vw", height: "85vh", overflow:"auto" }}>
       <ThemeProvider theme={theme}>
        <CardHeader
          sx={{
            backgroundColor: "rgba(134, 134, 134, 0.20)",
            borderRadius:"5px 5px 0px 0px",
            background:"rgba(134, 134, 134, 0.20)",
            height:{xl:"87px",lg:"46px" , md:"35px" , sm:"30px"},
            borderBottom:"1px solid rgba(134, 134, 134, 0.10)"

          }}
          title={
            <Typography
              sx={{ fontWeight:600, 
                 fontFamily:"Poppins",
                  mb: 1,ml:2,
                  fontSize: {xl:"20px", lg:"18px" , md:"16px" , sm:"14px"}, 
                  mt: 1 }}
            >
              Create a Document
            </Typography>
          }
          action={
            <Avatar
              onClick={handleClose}
              src={Img}
              sx={{
                marginLeft: "auto",
                height: "3vh",
                width: "3vh",
                display: "flex",
                marginTop : '0.5rem',
                alignItems: 'center',
                mr: 2,
              }}
            />
          }
        />
       

        <CardContent>
          <Typography
           
            color="rgba(43,43,43,0.80)"
            sx={{ 
              fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
            marginY:"15px", marginLeft:"38px" }}
          >
            Select one or more documents type you'd like to process in this
            workplace. You can add more later.
          </Typography>
          <div>
            <CardComponent2 
              isActive={isActive} handleClose={handleClose}
               />
          </div>
          <div>
      
            <Typography
              sx={{
              fontWeight:"500", 
              fontFamily:"Heebo",
              mb: 1, mt: 3,
              margin:"3.5px",
              paddingTop:"34px", 
                fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
            }}
            >
              Workplace Name
            </Typography>
            <TextField
              id="outlined-basic"
              rows={1}
              variant="outlined"
              fullWidth
              sx={
                {
                   height:{xl:"54px",lg:"46px" , md:"35px" , sm:"30px"},
                  borderRadius:"5px",     
                }
              }
            />
          </div>
        </CardContent>
      <CardActions>
        <Button
          sx={{
            width:{xl:"198px", lg:"160px" , md:"135px",sm:"120px"},
            height:{xl:"54px",lg:"46px" , md:"35px" , sm:"30px"},
            backgroundColor: "#9F77EB",
            fontFamily:"heebo",
            fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"},
            padding:{sm:"7px"},
            //padding:"15px 32px",
            fontWeight: "500!important",
            borderRadius:"5px",     
            textTransform: "none",
            color:"#FFF",
            ml: 1,
            ":hover": {
              bgcolor: "#9F77EB",
              color: "white",
            },
          }}
          onClick={handleClose}
        >
          Create Documents
        </Button>
      </CardActions>
        </ThemeProvider>
    </Card>
 
  );
}

export default Component2;
