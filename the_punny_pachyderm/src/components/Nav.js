import React, {useEffect, useState} from "react"
import '../App.css';
import {Link} from "react-router-dom";
import logo from "../img/Logo.jpg"
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


const axios = require("axios").default;

const useStyles = makeStyles({
  root: {
    fontSize : "18px",
    textTransform : "none"
  },
  menuicon: {
    margin: "50%"
  }
});

function Nav() {
    const classes = useStyles();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
        let mounted = true;
        axios.get("/api/getinfo")
        .then(response => {
          // handle success
            if(mounted){
              setItems(response.data.customers);
              setIsLoaded(true);
              }
        })
        .catch(error => {
          // handle error
          setError(error);
          setIsLoaded(true);
          console.log(error);
        })
        return () => mounted = false;
    }, [])

    var gabriel
    [gabriel] = items

    if (error) {
      return <div>Error: {error.toString()}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="nav-bar">
          <img src={logo} className="logo" alt="punny pachyderm logo" />
          <Hidden xsDown>
            <ul className="nav-links">
              <Grid container spacing={7}>
                <Grid item sm={4}>
                  <Button className={classes.root} component={Link} to="/">Home</Button>
                </Grid>
                <Grid item sm={4}>
                  <Button className={classes.root} component={Link} to="/shop">Shop</Button>
                </Grid>
                <Grid item sm={4}>
                  <Button className={classes.root} component={Link} to="/About">About</Button>
                </Grid>
              </Grid>
            </ul>
          </Hidden>
          <Hidden smUp>
            <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon className={classes.menuicon}/>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/shop">Shop</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/About">About</MenuItem>
              </Menu>
            </div>
          </Hidden>
        </div>
      );
    }
}


export default Nav;
