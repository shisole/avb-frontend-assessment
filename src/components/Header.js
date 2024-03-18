import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { openCommentsModal } from "store/slices/view";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top: "auto",
    bottom: 0,
  },

  title: {
    flexGrow: 1,
  },

  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: "200px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(openCommentsModal());

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Commentor
        </Typography>

        <Fab
          variant="extended"
          aria-label="add"
          className={classes.fabButton}
          onClick={handleOpen}
        >
          <AddIcon />
          Add Comment
        </Fab>

        <Button color="inherit" onClick={handleOpen}>
          Add Comment
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
