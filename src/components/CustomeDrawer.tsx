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
import useRTL from "../hooks/useRTL";
import { useTranslation } from "react-i18next";

type Anchor = "left" | "right";

export default function CustomeDrawer() {
  const isRTL = useRTL();
  const { t } = useTranslation();

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const [positionOfDrawer, setPositionOfDrawer] = React.useState<"right" | "left">("left");
  React.useEffect(() => {
    if (isRTL.isRtl) {
      setPositionOfDrawer("right");
    } else {
      setPositionOfDrawer("left");
    }
  }, [isRTL]);
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
      {([positionOfDrawer] as const).map((anchor) => (
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
                borderRadius: isRTL.isRtl ? "10px 0px 0px 10px" : "0px 10px 10px 0px",
                // bgcolor: "#FFFFFF",
              },
            }}
          >
            <Box width={250}>
              <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Typography fontWeight="600">{t("menu")}</Typography>
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
                    <ListItemText sx={{ textAlign: "start" }} primary={t(i.title)} />
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
