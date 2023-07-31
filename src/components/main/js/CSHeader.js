import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiLock,
  mdiLockOpen,
  AccountCircleIcon,
  mdiAccountCircle,
} from "@mdi/js";
import "../../main/scss/CSHeader.scss";
import "../../solarsystem/img/Tip001Blue.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <div className="CSHeader">
        <Toolbar className="header-menubar">
          <IconButton
            className="hamburger"
            //size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              marginLeft: "20px",
              color: "white",
            }}
            fontcolor="white"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="typography-cs"
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              //textAlign: "center",
              color: "#2196F3",
              marginLeft: "15px",
              fontFamily: "Orbitron-Bold",
            }}
          >
            Over the Horizon
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              color="white"
            />
          </Search>
          <Icon
            className="profile-icon"
            path={mdiAccount}
            title="User Profile"
            size={2}
            horizontal
            vertical
            rotate={180}
          />
          <Icon
            className="join-icon"
            path={mdiAccountCircle}
            title="join"
            size={2}
            horizontal
            vertical
            rotate={180}
          />
          <Icon
            className="locked"
            path={mdiLock}
            title="lock"
            size={2}
            horizontal
            vertical
            rotate={180}
          />
          <Icon
            className="lock-open"
            path={mdiLockOpen}
            title="lockOpen"
            size={2}
            horizontal
            vertical
            rotate={180}
          />
        </Toolbar>
      </div>
    </Box>
  );
}
