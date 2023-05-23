import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SplitButton from "./SplitButton";
import Image from "next/image";

const pages = [
  "About us",
  "Finance",
  "Call Us 1800 102 1800",
];
const settings = ["Hindi", "English"];

function TopAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="Topbar hidden md:block"
      sx={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      {/* <Container maxWidth="xl"> */}
      <Toolbar
        className="mx-2"
        disableGutters
        sx={{ minHeight: "30px!important" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "flex-end" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              className="topbar-item flex gap-2"
              sx={{ border: "0px!important" }}
            >
              {page === "Search City" ? (
                <Image
                  src="/location.png"
                  width={13}
                  height={13}
                  alt="location.png"
                />
              ) : null}
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <SplitButton index1="Hindi" index2="English" />
        </Box>
        <Box>
          <Button
            size="small"
            className="topbar-login-btn bg-gray-100 border-gray-500"
            variant="outlined"
            color="primary"
            href="/login"
          >
            Login
          </Button>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default TopAppBar;
