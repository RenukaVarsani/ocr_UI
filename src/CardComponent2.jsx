import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CheckCircle, FileText } from "react-feather";
import ButtonComponent from "./ButtonComponent";
import { Button } from "@mui/material";

const ResizableIcon = styled(FileText)`
  width: 1.2rem;
  height: 1.5rem;
  padding: 0.3rem;
  display: grid;
`;

export default function ResponsiveGrid({ isActive, handleClose }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "1px solid rgba(0, 0, 0, 0.20)",
        borderRadius:"5px",
        //paddingTop:"19px",
        paddingBottom:"51px",
        paddingLeft:"20px",
        marginRight:"38px",
        marginLeft:"39px",
        paddingTop:"33px",
        overflow: "auto",
        maxHeight:"auto",   
      }}
      pl={2}
      pr={3}
    >
      <Typography
        component="p"
        color="#868686" 
        sx={{ ml: 1, mt: 2, paddingBottom:"9px",
        fontSize: "small" }}
      >
        Accounts Payable
      </Typography>

      <Grid
        container
        spacing= {{ xs: 2, md: 2 }}
        columns={{ xs:4, sm: 8, md:12 }}
        mb={3}
      >
        <Grid   xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Invoices"}
            buttonId="button1"
          />
        </Grid>
        <Grid   xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Receipts"}
            buttonId="button2"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={" Transaction Bill"}
            buttonId="button3"
          />
        </Grid>
        <Grid   xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Transaction Invoices"}
            buttonId="button4"
          />
        </Grid>
      </Grid>
      <Typography
        component="p"
        color="#868686" 
        sx={{ ml: 1, mt: 2,paddingBottom:"9px",fontSize: "small" }}
      >
        Recruitment
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        mb={3}
      >
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"   Resume"}
            buttonId="button5"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Resume List"}
            buttonId="button6"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={" Technical Resume"}
            buttonId="button7"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Practical Resume"}
            buttonId="button8"
          />
        </Grid>
      </Grid>
      <Typography
        component="p"
        color="#868686" 
        sx={{ ml: 1, mt: 2, paddingBottom:"9px",fontSize: "small" }}
      >
        Employee Identification
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Aadharcard"}
            buttonId="button9"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Pancard"}
            buttonId="button10"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Marksheet"}
            buttonId="button11"
          />
        </Grid>
        <Grid xs={12} sm={4} md={3}>
          <ButtonComponent
            isActive={isActive}
            handleClose={handleClose}
            name={"Certificate"}
            buttonId="button12"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
