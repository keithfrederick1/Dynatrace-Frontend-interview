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
import { useContext } from 'react';
import { Context } from '../Context';
import Chevron from "./Chev/Chevron";
import ValidationTextFields from "./InputFields";
import BasicTable from "./LeadTable";


const drawerWidth = 240;
const PermanentDrawerLeft = () => {
  const { setShowLeads, showLeads, leadsList } = useContext(Context);


  return (
    <div>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#E6ECED",
      }}
        elevation={0}
    >
      <Chevron />
    </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "content-box",
          backgroundColor: "#E6ECED"
        }
      }}
        variant="permanent"
        anchor="left"
      >
          <h3 style={{ marginTop: '80px', marginLeft: '15px'}}>Accounts</h3>
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
                fontWeight: "bold",
                fontSize: "27px",
                
              }}
            >
              Sales leads
            </Typography>
            <Typography paragraph >
              { leadsList ? `Showing ${leadsList.length} of ${leadsList.length}` : ''}
            </Typography>
            <Button
              size="medium"
              variant="contained"
              sx={{
                right: "-90%",
                backgroundColor: "#51b7c2",
                fontSize: "10px",
                boxShadow: 0
               }}
              onClick={() => setShowLeads(!showLeads)}
            >
              Add lead
            </Button>
            <div style={{ height: "10px" }}></div>
            <BasicTable />
          </>
        ) : (
          <ValidationTextFields />
        )}
      </Box>
    </Box>
    </div>
  );
}

export default PermanentDrawerLeft;