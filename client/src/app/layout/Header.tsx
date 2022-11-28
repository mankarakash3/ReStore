import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  darkmode: boolean;
  ThemeChangeHandler: () => void;
}

const midlinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightlinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navstyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header({ darkmode, ThemeChangeHandler }: Props) {
  return (
    <AppBar position="static" style={{ marginBottom: "32px" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            RE-STORE
          </Typography>
          <Switch checked={darkmode} onChange={ThemeChangeHandler} />
        </Box>

        <List style={{ display: "flex" }}>
          {midlinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navstyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box style={{ display: "flex", alignItems: "center" }}>
          <IconButton style={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List style={{ display: "flex" }}>
            {rightlinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navstyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
