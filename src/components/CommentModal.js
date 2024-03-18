import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";

import CommentForm from "./CommentForm";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formDialog: {
    display: "flex",
    minHeight: "350px",
    minWidth: "350px",
    zIndex: 1,
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getViewCommentsModalOpen);

  const handleClose = () => dispatch(closeCommentsModal());

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.formDialog}>
          <CommentForm />
        </Paper>
      </Slide>
    </Modal>
  );
};

export default CommentModal;
