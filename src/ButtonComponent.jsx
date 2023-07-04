import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { FileText } from "react-feather";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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

const ResizableIcon = styled(FileText)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;


const ButtonComponent = ({ isActive, buttonId, name }) => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (id) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(id)) {
        return prevSelectedButtons.filter((buttonId) => buttonId !== id);
      } else {
        return [...prevSelectedButtons, id];
      }
    });
  };

  return (
    <> 
      <ThemeProvider theme={theme}>
     
        <Button
       fullWidth
       variant="contained"
          startIcon={<ResizableIcon />}
          size="medium"
          endIcon={selectedButtons.includes(buttonId) ? <CheckCircleIcon 
            sx={{ 
              position: "absolute",
               height: "20px",
                width: "20px", 
                bottom: { xl: "60px", lg: "24px", md  : "41px", sm: "25px" },
                right: 7, 
               // translate: "translateY(1px)"
               }} /> : null}
          onClick={() => handleButtonClick(buttonId)}
          sx={{
            backgroundColor: selectedButtons.includes(buttonId) ? "#9F77EB" : "#D3D3D3",
            fontSize: { xl: "15px", lg: "13px", md  : "12px", sm: "12px" },
            fontFamily: "Heebo",
            borderRadius: "5px",
            letterSpacing:"0px",
            fontWeight: "500 !important",
            color: selectedButtons.includes(buttonId) ? "white" : "black",
            textTransform: "none",
            padding: "4px 20px",
            justifyContent: "start",
            height: "7.5vh",
            position: "relative",
            ml: 1,
            ":hover": {
              bgcolor: "#9F77EB",
              color: "white",
            },

          }}
        >
          {name}


        </Button>
      
      </ThemeProvider>
    </>
  );
};

export default ButtonComponent;
