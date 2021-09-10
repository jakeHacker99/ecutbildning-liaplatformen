import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import AppBar from "@material-ui/core/AppBar";

import "./FileUpload.css";
import Upload from "./Upload";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
    // padding: theme.spacing(0, 1),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    maxWidth: 1000,
    margin: `${theme.spacing(1)}px auto`,
    //padding: theme.spacing(2),
  },
  square: {
    width: 150,
    height: 150,
  },
  icon: {},
}));

export default function ImageAvatars() {
  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const handleChange = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // @ts-ignore
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const allStudents = ["jakob", "Eric Eriksson", "david"];
  const allEducations = ["java", "react", "sprinboot", "BärplockarAkademien"];
  const [name, setName] = useState("Niclas");
  const [education, setEducation] = useState(allEducations[3]);
  const [studentName, setStudentName] = useState(allStudents[1]);
  const [linkedinLink, setLinkedinLink] = useState("ww");

  const classes = useStyles();
  const selectFileHandler = (e: any) => {
    console.log(e.target.files[0]);
  };

  const fileUploader = () => {};

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon className={classes.icon} />
          <Typography
            variant="h5"
            color="inherit"
            align="center"
            style={{ width: "100%" }}
          >
            Mina Sidor
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Paper
          className={classes.paper}
          style={{  marginTop: 50 }}
        >
          <Grid container wrap="nowrap">
            <Grid item xs zeroMinWidth>
                  <Upload/>
            </Grid>
          </Grid>
        </Paper>
        <Grid className="profileTextSettings">
          <Grid container wrap="nowrap">
            <Grid item xs>
              <Typography noWrap variant={"h6"} className="studentName">
                {studentName}
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item xs>
              <Typography variant={"h6"} noWrap>
                {education}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ margin: 40, backgroundColor: "#000000" }} />


        <div style={{ marginTop: 30 }}>
          <TextField
            id="filled-textarea"
            label="Länk till Linkedin"
            placeholder="Linkedin"
            multiline
            variant="filled"
          />
        </div>

        <div>
          <Button variant="contained" color="primary">
            Lediga LIA-platser
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Favoriter
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
