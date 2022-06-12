import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import BasicBreadcrumbs from "./Breadcrumbs";
import ValidationTextFields from "./InputFields";
import BasicTable from "./LeadTable";


const handleAddClick = () : MouseEvent => {
  //redirect to input fields
  //setshowLeads to false
  return 
};

const drawerWidth = 240;
const PermanentDrawerLeft = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <BasicBreadcrumbs />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Sales leads", "Contacts", "Calendar", "Reports"].map(
            (text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            )
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* main body */}
        {showLeads === true ? (
          <>
            <Typography
              paragraph
              sx={{
                marginLeft: "-46rem",
                marginTop: "-3rem",
                fontWeight: "bold",
                fontSize: "27px"
              }}
            >
              {" "}
              Sales Leads
            </Typography>
            <Typography paragraph sx={{ marginLeft: "-49rem" }}>
              Showing _ of _
            </Typography>
            <Button
              size="small"
              variant="contained"
              sx={{ marginRight: "-80%" }}
              onClick={() => handleAddClick()}
            >
              Add lead
            </Button>
            <BasicTable />
          </>
        ) : (
          <ValidationTextFields />
        )}
      </Box>
    </Box>
  );
}

export default PermanentDrawerLeft;