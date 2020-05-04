import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import UserForm from "./UserForm";
import "./index.css";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id={props.edit || props.delete ? "modalDiv" : ""}>
      {props.add && (
        <Tooltip title="Add A New User">
          <IconButton aria-label="add" onClick={handleOpen}>
            <AddCircleTwoToneIcon id="addIcon" />
          </IconButton>
        </Tooltip>
      )}

      {props.edit && (
        <Tooltip title="Edit">
          <IconButton aria-label="edit" id="editIcon" onClick={handleOpen}>
            <EditTwoToneIcon />
          </IconButton>
        </Tooltip>
      )}

      {props.delete && (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" id="deleteIcon" onClick={handleOpen}>
            <DeleteTwoToneIcon />
          </IconButton>
        </Tooltip>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <UserForm
            edit={props.edit}
            delete={props.delete}
            add={props.add}
            closing={() => {
              handleClose();
            }}
          />
        </Fade>
      </Modal>
    </div>
  );
}
