import React from "react";
import { Grid, Typography, FormLabel } from "@material-ui/core";
import BG from "../../IMG/bg.jpg";
import FB from "../../IMG/fb.png";
import Google from "../../IMG/google.png";
import Linked from "../../IMG/linked.png";
import Background from "../../IMG/login_bg.jpg";
import useStyles from "./style";
function LoginPage() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.biz_job}>
        <img className={classes.bg_img} src={BG} alt="" srcset="" />
        <div className="container">
          <div className={classes.form_section}>
            <div className="row">
              <Grid item xs={12} md={6} >
                <div className="login_container">
                  <h4>Login</h4>
                  <div className="login_auth">
                    <div className="login_auth_platform">
                      <div className="login_auth_media">
                        <img src={Google} alt="Fabcebook" />
                      </div>
                      <span className="media_name">Connect With Google</span>
                    </div>
                    <div className="login_auth_platform">
                      <div className="login_auth_media">
                        <img src={FB} alt="Fabcebook" />
                      </div>
                      <span className="media_name">Connect With Google</span>
                    </div>
                    <div className="login_auth_platform">
                      <div className="login_auth_media">
                        <img src={Linked} alt="Fabcebook" />
                      </div>
                      <span className="media_name">Connect With Google</span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="creen_img">
                  <img src={Background} className="background_image" />
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
