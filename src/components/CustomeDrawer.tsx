import * as React from "react";

import Drawer from "@mui/material/Drawer";
import {
  Box,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { menuData } from "../layout/data";
import { useLocation } from "react-router-dom";

type Anchor = "left";

export default function CustomeDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const location = useLocation();
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{}}>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              border: "2px solid",
              width: "40px",
              height: "40px",
              borderRadius: "5px",
            }}
            aria-label="setting"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              borderRadius: "10px",
              ".MuiDrawer-paper": {
                borderRadius: "0px 10px 10px 0px",
                bgcolor: "#FFFFFF",
              },
            }}
          >
            <Box width={250}>
              <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Typography fontWeight="600">Menu</Typography>
                <IconButton onClick={toggleDrawer(anchor, false)} color="primary" aria-label="close">
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider />
            </Box>
            <List>
              {menuData.map((i, idx) => (
                <ListItem
                  disablePadding
                  sx={{ my: 1, bgcolor: location.pathname === i.link ? "rgba(51, 170, 51, .1)" : "" }}
                  key={idx}
                >
                  <ListItemButton LinkComponent={Link} href={i.link}>
                    <ListItemIcon>
                      <i.icon />
                    </ListItemIcon>
                    <ListItemText primary={i.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
