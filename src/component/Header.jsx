import * as React from "react";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Modal from "@mui/material/Modal";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { RiSearch2Line } from "react-icons/ri";
import { getSearchResulsts } from "../api/movieapi";
import { imageImdbsrc } from "../utils/constances";

const settings = ["Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [inputvalue, setInputValue] = React.useState("");
  const [results, setResults] = React.useState([]);

  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navgiation = useNavigate();
  const storedUserAuthObj = window.localStorage.getItem(
    "sb-qruxkmojziyqrfovvzbg-auth-token"
  );
  const myObject = JSON.parse(storedUserAuthObj);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    window.localStorage.clear();
    navgiation("/signin");
  };

  const handleCloseUserMenuu = () => {
    setAnchorElUser(null);
  };

  async function searchmovies() {
    let mydata = await getSearchResulsts(inputvalue);
    console.log(mydata);

    if(mydata.status === 200){
      setResults(mydata.data.results);
    }else{
      return
    }
    
  }

  useEffect(() => {
    searchmovies();
  }, [inputvalue]);


  return (
    <Box sx={{ flexGrow: 1, padding: "16px", paddingBottom: "0px" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalbx" style={{ borderRadius: "40px" }}>
          <div className="userinput">
            <div className="inputbx">
              <RiSearch2Line />
              <input
                type="text"
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search Movies..."
              />
            </div>

            {results.length ? (
              <div className="suggesionbx">
                {results.map((elm) => {
                  return (
                    <>
                      <Link to={`/browse/fullview/${elm.id}`}>
                        <div className="searchitem" key={elm.id}>
                          <div className="previewbx">
                            <img
                              src={
                                elm.poster_path
                                  ? imageImdbsrc(elm.poster_path)
                                  : "https://drive-in-theatre.netlify.app/movieImages/default-movie.png"
                              }
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div className="prevname">{elm.title}</div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            ) : null}
          </div>
        </Box>
      </Modal>

      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <img src="/images/logo.png" alt="" srcset="" className="logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            {myObject ? (
              <div style={{ display: "flex", gap: "10px" }}>
                {window.location.pathname === "/browse" ? (
                  <Button
                    variant="contained"
                    style={{ background: "#9575cd" }}
                    onClick={handleOpen}
                  >
                    <RiSearch2Line /> &nbsp; Search
                  </Button>
                ) : (
                  <Link to={"/browse"}>
                    <Button
                      variant="contained"
                      style={{ background: "#9575cd" }}
                    >
                      <SlideshowIcon /> &nbsp; Watch
                    </Button>
                  </Link>
                )}

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <img
                      src="/images/avtaar.png"
                      style={{ height: "40px", borderRadius: "4px" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
            ) : (
              <Link to={"/signin"}>
                <Button variant="contained" style={{ background: "red" }}>
                  Sign in
                </Button>
              </Link>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClick={handleCloseUserMenuu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography
                    sx={{ textAlign: "center" }}
                    onClick={handleCloseUserMenu}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
