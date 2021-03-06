import React from "react";
import Backdrop from "@material-ui/core/Backdrop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const BackDropBox = (props) => {
  const { open, closeBackDrop, message } = props;
  const classes = useStyles();

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={closeBackDrop}
      >
        {message}
      </Backdrop>
    </div>
  );
};

export default BackDropBox;
