import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { CircleOutlined } from '@mui/icons-material'
import { CircularProgress, Dialog, useTheme } from '@mui/material'
import { createStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    rowAlignMent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    tabLabel: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontSize: 18,
      color: "#000",
      // fontWeight:'bold'
    },
    selectedTabLabel: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontSize: 18,
      color: "#4078d6",
      fontWeight: "bold",
    },
    button: {
      height: 30,
      marginLeft: 50,
      textTransform: "none",
    },
    modal: {
      // width: 400,
      backgroundColor: "transparent",
      // height: 200,
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default function SimpleLoader(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    const handleClose = () => {
        props.handleClose1();
      };
    
    React.useEffect(() => {
    setTimeout(() => {
        props.handleClose1();
    }, 2000);
    }, []);

  return (
    
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={handleClose}
      classes={{ paper: classes.modal }}
      aria-labelledby="responsive-dialog-title"
    >
    <CircularProgress color="success" />
    </Dialog>
  )
}
