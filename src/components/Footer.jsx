import React from "react";
import { Box, Button, Avatar, Grid, Typography, Hidden } from "@mui/material";

import { blue, blueGrey, orange, red } from "@mui/material/colors";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedIn.png";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Hidden mdDown>
        <Box sx={{ bgcolor: "black", mt: 20, minHeight: "100vh" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
            sx={[
              {
                px: 4,
                py: 2,

                mx: 2,
                // alignItems: "center",
                // bgcolor: blueGrey[900],
              },
              // (theme) => ({
              //   [theme.breakpoints.up("md")]: {
              //     display: "none",
              //     alignItems: "center",

              //     flexDirection: "column",
              //   },
              // }),
            ]}
          >
            <Grid sx={{ px: 2, py: 15 }} xs={12} sm={6} md={6}>
              {" "}
              <Box
                sx={[
                  {
                    color: "white",

                    width: "100%",

                    textAlign: "center",
                  },
                  // (theme) => ({
                  //   [theme.breakpoints.down("sm")]: {
                  //     display: "flex",
                  //     alignItems: "center",

                  //     flexDirection: "column",
                  //   },
                  // }),
                ]}
              >
                <Typography variant="h4" px={2} py={2} sx={{}}>
                  The Church of God
                </Typography>
                <Typography px={2} variant="subtitle1">
                  The Church of God is a church entrenched in worship, <br></br>
                  words and prayers. <br></br> Our watchword is that a life
                  pleasing to God
                  <br></br>
                  is worth living at all times
                </Typography>
                <Button
                  sx={[
                    {
                      background: "#FF9800",
                      my: 2,
                      px: 2,
                      py: 2,
                      // fontSize: 16,
                      "&:hover": { background: orange[600] },
                      fontWeight: 850,
                    },

                    (theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        fontSize: 10,
                        px: 3,
                        textAlign: "center",
                      },
                    }),
                  ]}
                  variant="contained"
                >
                  Stream live programmes here
                </Button>
              </Box>
            </Grid>
            <Grid sx={{ px: 1, py: 15 }} xs={12} sm={6} md={6}>
              <Box
                sx={{
                  color: "white",

                  textAlign: "center",
                  width: "100%",
                }}
              >
                {" "}
                <Typography variant="h4" px={2} py={2} sx={{}}>
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <PhoneIcon
                    sx={{
                      mr: 1,
                      borderRadius: "50%",
                      fontSize: 30,
                    }}
                  />

                  <Typography variant="subtile3">08180907820</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <EmailIcon
                    sx={{
                      mr: 1,

                      fontSize: 30,
                    }}
                  />

                  <Typography variant="subtile3">
                    devaltruist@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <FmdGoodIcon
                    sx={{
                      mr: 1,
                      fontSize: 30,
                    }}
                  />

                  <Typography variant="subtile3">Address </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            sx={{
              px: 1,
              py: 4,
              justifyContent: "center",
              placeContent: "center",
              alignItems: "center",
            }}
            xs={12}
            justifyContent="center"
            alignItems={"center"}
            sm={6}
            md={6}
          >
            <Box
              sx={{
                width: "100%",
                color: "white",
                py: 2,
                px: 2,
                mt: 2,
              }}
            >
              {" "}
              <Typography variant="h6" py={2} sx={{ textAlign: "center" }}>
                Follow us on our social media platforms
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="facebook">
                  <FacebookIcon
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 1,
                      bgcolor: blue[500],
                      color: "white",
                    }}
                  />
                </Link>{" "}
                <Link to="instagram">
                  <InstagramIcon
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 1,
                      // bgcolor: "white",
                      color: "#405DE6",
                    }}
                  />
                </Link>
                <Link to="twitter">
                  {" "}
                  {/* <Avatar
                    alt="twitter"
                    variant={"rounded"}
                    sx={{ width: 60, height: 60, mx: 1 }}
                    src={twitter}
                  />{" "} */}
                  <TwitterIcon
                    sx={{ width: 60, height: 60, mx: 1, color: blue[500] }}
                  />
                </Link>
                <Link to="linkedin">
                  <LinkedInIcon
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 1,
                      bgcolor: blue[500],
                      color: "white",
                    }}
                  />
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                py={2}
                sx={{
                  textAlign: "center",
                  mt: 4,
                  width: "100%",
                }}
              >
                Copyright 2022. All rights reserved
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box sx={{ bgcolor: "black", mt: 10, py: 5 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
            sx={[
              {
                px: 4,
                py: 2,
                // justifyContent: "center",

                // alignItems: "center",
                // bgcolor: blueGrey[900],
              },
              (theme) => ({
                [theme.breakpoints.up("md")]: {
                  display: "none",
                  alignItems: "center",

                  flexDirection: "column",
                },
              }),
            ]}
          >
            <Grid sx={{ px: 1, py: 8 }} xs={12} sm={6} md={6}>
              {" "}
              <Box
                sx={[
                  {
                    color: "white",

                    width: "100%",

                    textAlign: "center",
                  },
                  (theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      display: "flex",
                      alignItems: "center",

                      flexDirection: "column",
                    },
                  }),
                ]}
              >
                <Typography variant="h4" px={2} py={2} sx={{}}>
                  The Church of God
                </Typography>
                <Typography px={2} variant="subtitle1">
                  The Church of God is a church entrenched in worship, words and
                  prayers. <br></br> Our watchword is that a life pleasing to
                  God
                  <br></br>
                  is worth living at all times
                </Typography>
                <Button
                  sx={[
                    {
                      background: "#FF9800",
                      my: 2,
                      px: 2,
                      py: 2,
                      // fontSize: 16,
                      "&:hover": { background: orange[600] },
                      fontWeight: 850,
                    },

                    (theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        fontSize: 10,
                        px: 3,
                        textAlign: "center",
                      },
                    }),
                  ]}
                  variant="contained"
                >
                  Stream live programmes here
                </Button>
              </Box>
            </Grid>
            <Grid sx={{ px: 1, py: 8 }} xs={12} sm={6} md={6}>
              <Box
                sx={{
                  color: "white",

                  textAlign: "center",
                  width: "100%",
                }}
              >
                {" "}
                <Typography variant="h4" px={2} py={2} sx={{}}>
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <PhoneIcon
                    sx={{
                      mr: 1,
                      borderRadius: "50%",
                      fontSize: 30,
                    }}
                  />

                  <Typography variant="subtile3">08180907820</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <EmailIcon
                    sx={{
                      mr: 1,

                      fontSize: 30,
                    }}
                  />

                  <Typography variant="subtile3">
                    devaltruist@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <FmdGoodIcon
                    sx={{
                      mr: 1,
                      fontSize: 30,
                    }}
                  />

                  <Typography variant="subtile3">Address </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            sx={{
              px: 1,
              py: 4,
              justifyContent: "center",
              placeContent: "center",
              alignItems: "center",
            }}
            xs={12}
            justifyContent="center"
            alignItems={"center"}
            sm={6}
            md={6}
          >
            <Box
              sx={{
                width: "100%",
                color: "white",
                py: 2,
                px: 2,
                mt: 2,
              }}
            >
              {" "}
              <Typography variant="h6" py={2} sx={{ textAlign: "center" }}>
                Follow us on our social media platforms
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="facebook">
                  <FacebookIcon
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 1,
                      bgcolor: blue[500],
                      color: "white",
                    }}
                  />
                </Link>{" "}
                <Link to="instagram">
                  <InstagramIcon
                    sx={{
                      width: 60,
                      height: 60,

                      // bgcolor: "white",
                      color: "#405DE6",
                    }}
                  />
                </Link>
                <Link to="twitter">
                  {" "}
                  {/* <Avatar
                    alt="twitter"
                    variant={"rounded"}
                    sx={{ width: 60, height: 60, mx: 1 }}
                    src={twitter}
                  />{" "} */}
                  <TwitterIcon
                    sx={{ width: 60, height: 60, color: blue[500] }}
                  />
                </Link>
                <Link to="linkedin">
                  <LinkedInIcon
                    sx={{
                      width: 60,
                      height: 60,

                      bgcolor: blue[500],
                      color: "white",
                    }}
                  />
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                py={2}
                sx={{
                  textAlign: "center",
                  mt: 4,
                  width: "100%",
                }}
              >
                Copyright 2022. All rights reserved
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Hidden>
    </>
  );
};

export default Footer;
