import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import LoginForm from './LoginForm'
import { ModalConsumer } from "./ModalContext";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4)
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

    /* const test = React.useContext(ModaloContext)
    console.log(test) */
  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

return (
  <div>
    <ModalConsumer>
      {({ modalOpen, openModal, closeModal }) => (
        <div>
          <p>Click to get the full Modal experience!</p>
          <button type="button" onClick={openModal}>
            Open Modal
          </button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={modalOpen}
            onClose={closeModal}
          >
            <div style={modalStyle} className={classes.paper}>
              <LoginForm />
            </div>
          </Modal>
        </div>
      )}
    </ModalConsumer>
  </div>
);
}
