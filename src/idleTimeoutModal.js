import React, { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { useStyles } from "./js/styles/landingpage-css";
import Dialog from "@material-ui/core/Dialog";
import { host, dynamicHost } from "./js/constants/app-constants";

const IdleTimeoutModal = (props) => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      props.handleClose();
      localStorage.clear();
      window.location.href = `${dynamicHost}.auth/logout`;
    }, 120000);
  }, []);

  return (
    <Dialog
      open={props.showModal}
      onClose={props.handleClose}
      PaperProps={{
        style: {
          borderRadius: 21,
          width: 497,
        },
      }}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
      disableBackdropClick
    >
      <div style={{ height: "auto" }}>
        <div className={classes.topHeader}></div>

        <div style={{ padding: "49px 85px 49px 85px" }}>
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontSize: 18,
              weight: "500",
              textAlign: "center",
            }}
          >
            You are not active from last 30 minutes. Do you Want to Logout?
          </Typography>

          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              className={classes.changePersonaButtonStyle}
              style={{ textTransform: "none" }}
              onClick={() => props.handleLogout()}
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Yes
              </Typography>
            </Button>
            <Button
              className={classes.changePersonaButtonStyle}
              style={{ textTransform: "none", marginLeft: 15 }}
              onClick={() => props.handleClose()}
            >
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                No
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default IdleTimeoutModal;
