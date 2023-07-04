import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Img from "../src/images/x-circle.svg";
import { createTheme, ThemeProvider , makeStyles } from "@mui/material";
 //import { makeStyles } from '@mui/styles'

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

// const useStyles = makeStyles((theme) => ({
//   textField: {
//     [theme.breakpoints.up('sm')]: {
//       '& input': {
//         height: "44px", // Specify the desired height for 'sm' breakpoint and above
//       },
//     },
//     [theme.breakpoints.up('md')]: {
//       '& input': {
//         height: "46px", // Specify the desired height for 'md' breakpoint and above
//       },
//     },
//     [theme.breakpoints.up('lg')]: {
//       '& input': {
//         height: "50px", // Specify the desired height for 'lg' breakpoint and above
//       },
//     },
//     [theme.breakpoints.up('xl')]: {
//       '& input': {
//         height: "54px", // Specify the desired height for 'lg' breakpoint and above
//       },
//     }
//   },  
// }));

function Component2({ handleClose , isActive}) {
  // const classes = useStyles();

  return (
    
    <Card sx={{ width: "65vw", height: "85vh", overflow:"auto", paddingBottom:"30px" }}>
       <ThemeProvider theme={theme}>
        <CardHeader
          sx={{
            backgroundColor: "rgba(134, 134, 134, 0.20)",
            borderRadius:"5px 5px 0px 0px",
            background:"rgba(134, 134, 134, 0.20)",
            height:{xl:"56px",lg:"40px" , md:"30px" , sm:"35px"},
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
                height: "auto",
                width: "auto",
                display: "flex",
                marginTop: {xl:"22px", lg:"10px" , md:"6px" , sm:"9px"},
                marginRight: {xl:"40px", lg:"23px" , md:"25px" , sm:"18px"},
               // marginTop : '0.5rem',
                alignItems: 'center',
                //mr: 2,
              }}
            />
          }
        />
       

        <CardContent>
          <Typography
           
            color="rgba(43,43,43,0.80)"
            sx={{ 
              fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
            marginY:"15px", marginLeft:"22px" }}
          >
            Select one or more documents type you'd like to process in this
            workplace. You can add more later.
          </Typography>
          <div>
            <CardComponent2 
              isActive={isActive} handleClose={handleClose}
               />
          </div>
         
            <Typography
              sx={{
              fontWeight:"500", 
              fontFamily:"Heebo",
              mb: 1, mt: 3,
              margin:"3.5px",
              paddingTop:"34px", 
              paddingLeft:"22px", 
                fontSize: {xl:"16px", lg:"14px" , md:"12px" , sm:"10px"}, 
            }}
            >
              Workplace Name
            </Typography>
            <TextField
              id="outlined-basic"
              rows={1}
              variant="outlined"
            // fullWidth
              sx={{
                 
                paddingLeft:"23px", 
                '@media (min-width: 600px)': {
                  '& input': {
                    height: "13px", 
                    width:"48.3vw"
                    // Specify the desired height for 'sm' breakpoint and above
                  },
                },
                '@media (min-width: 960px)': {
                  '& input': {
                    height:  "13px",
                    width:"54.7vw" // Specify the desired height for 'md' breakpoint and above
                  },
                },
                '@media (min-width: 1280px)': {
                  '& input': {
                    height:  "13px",
                    width:"57.7vw"
                     // Specify the desired height for 'lg' breakpoint and above
                  },
                  '@media (min-width: 1920px)': {
                    '& input': {
                      height: "17px",
                      width:"59.7vw"
                      // Specify the desired height for 'lg' breakpoint and above
                    },
                },
              }}}
              />
          
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
            marginLeft:{xl:"30px", lg:"30px", md:"30px", sm:"30px"},
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
