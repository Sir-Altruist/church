import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import worship from "../assets/worship.png";
import restoration from "../assets/restoration.png";
import digging from "../assets/digging.png";
import vigil from "../assets/vigil.png";
import { Box, Container } from "@mui/system";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChurchIcon from "@mui/icons-material/Church";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { orange } from "@mui/material/colors";

const Activities = () => {
  return (
    <Container style={{ minHeight: "100vh" }} maxWidth="lg">
      <Typography
        px={3}
        py={2}
        textAlign={"center"}
        component={"div"}
        variant="h4"
      >
        Our Activities
      </Typography>
      <Card
        sx={[
          {
            mx: 6,
            display: "flex",
            // flexDirection: { xs: "column", md: "flex" },
            bgcolor: orange[100],
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              // display: "flex",
              flexDirection: "column",
              mx: 0,
            },
            [theme.breakpoints.between("sm", "md")]: {
              mx: 0,
            },
          }),
        ]}
      >
        <CardMedia
          component="img"
          image={worship}
          alt="Worship"
          sx={[
            { width: 300 },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                // display: "flex",
                width: "100%",
              },
            }),

            (theme) => ({
              [theme.breakpoints.down("xs")]: {
                // display: "flex",
                width: 100,
              },
            }),
          ]}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              px={3}
              py={2}
              textAlign={"center"}
              component={"div"}
              variant="h4"
              sx={[
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    // display: "flex",
                    fontSize: "1.0rem",
                    fontWeight: 900,
                  },
                }),
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: {
                    // display: "flex",
                    fontSize: "1.5rem",
                  },
                }),
                // (theme) => ({
                //   [theme.breakpoints.down("xs")]: {
                //     // display: "flex",
                //     fontSize: "1rem",
                //     px: 0,
                //   },
                // }),
              ]}
            >
              Audience with the King
            </Typography>
            <Box
              sx={[
                {
                  display: "flex",

                  alignItems: "center",
                  my: 1,
                  mx: 2,
                },
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    mx: 0,
                    width: "100%",
                  },
                }),
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "100%",
                  },
                }),
              ]}
            >
              <CalendarMonthIcon
                sx={[
                  { width: 40, height: 40 },
                  (theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      width: 30,
                      height: 30,
                    },
                  }),
                ]}
              />
              <Typography
                sx={[
                  (theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      // display: "flex",
                      fontSize: 16,
                      // fontWeight: 900,
                      px: 1,
                      width: "100%",
                    },
                  }),
                  (theme) => ({
                    [theme.breakpoints.between("sm", "md")]: {
                      // display: "flex",
                      fontSize: 20,
                      px: 1,
                      width: "100%",
                    },
                  }),
                ]}
                component={"div"}
                px={2}
                variant="subtitle1"
              >
                Every Sunday, 8:000am - 9:00am & 9:00am - 11:00am
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <ChurchIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                Church Auditorium
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <FmdGoodIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                The Church Address
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={[
          {
            my: 3,
            mx: 6,
            display: "flex",
            // flexDirection: { xs: "column", md: "flex" },
            bgcolor: orange[100],
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              // display: "flex",
              flexDirection: "column",
              mx: 0,
            },
            [theme.breakpoints.between("sm", "md")]: {
              mx: 0,
            },
          }),
        ]}
      >
        <CardMedia
          component="img"
          image={digging}
          alt="digging"
          sx={[
            { width: 300 },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                // display: "flex",
                width: "100%",
              },
            }),

            (theme) => ({
              [theme.breakpoints.down("xs")]: {
                // display: "flex",
                width: 100,
              },
            }),
          ]}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              px={3}
              py={2}
              textAlign="center"
              component={"div"}
              variant="h4"
            >
              Digging Deep
            </Typography>
            <Box
              sx={[
                {
                  display: "flex",

                  alignItems: "center",
                  my: 1,
                  mx: 2,
                },
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                  },
                }),
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "100%",
                  },
                }),
              ]}
            >
              <CalendarMonthIcon sx={[{ width: 40, height: 40 }]} />
              <Typography sx={[]} component={"div"} px={2} variant="subtitle1">
                Every Tuesday, 6:000pm - 7:30pm
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <ChurchIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                Church Auditorium
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <FmdGoodIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                The Church Address
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={[
          {
            mx: 6,
            my: 3,
            display: "flex",
            // flexDirection: { xs: "column", md: "flex" },
            bgcolor: orange[100],
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              // display: "flex",
              flexDirection: "column",
              mx: 0,
            },
            [theme.breakpoints.between("sm", "md")]: {
              mx: 0,
            },
          }),
        ]}
      >
        <CardMedia
          component="img"
          image={restoration}
          alt="digging"
          sx={[
            { width: 300 },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                // display: "flex",
                width: "100%",
              },
            }),

            (theme) => ({
              [theme.breakpoints.down("xs")]: {
                // display: "flex",
                width: 100,
              },
            }),
          ]}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              px={4}
              py={2}
              textAlign="center"
              component={"div"}
              variant="h4"
            >
              Restoration Hour
            </Typography>
            <Box
              sx={[
                {
                  display: "flex",

                  alignItems: "center",
                  my: 1,
                  mx: 2,
                },
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                  },
                }),
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "100%",
                  },
                }),
              ]}
            >
              <CalendarMonthIcon sx={[{ width: 40, height: 40 }]} />
              <Typography sx={[]} component={"div"} px={2} variant="subtitle1">
                Every Thursday, 9:000am - 11:00am
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <ChurchIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                Church Auditorium
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <FmdGoodIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                The Church Address
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={[
          {
            mx: 6,
            my: 3,
            display: "flex",
            // flexDirection: { xs: "column", md: "flex" },
            bgcolor: orange[100],
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              // display: "flex",
              flexDirection: "column",
              mx: 0,
            },
            [theme.breakpoints.between("sm", "md")]: {
              mx: 0,
            },
          }),
        ]}
      >
        <CardMedia
          component="img"
          image={vigil}
          alt="vigil"
          sx={[
            { width: 300 },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                // display: "flex",
                width: "100%",
              },
            }),

            (theme) => ({
              [theme.breakpoints.down("xs")]: {
                // display: "flex",
                width: 100,
              },
            }),
          ]}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              px={4}
              py={2}
              textAlign="center"
              component={"div"}
              variant="h4"
              sx={[
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    fontSize: "1.0rem",
                    fontWeight: 900,
                  },
                }),
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "100%",
                    fontSize: "1.5rem",
                    fontWeight: 900,
                  },
                }),
              ]}
            >
              General Vigil
            </Typography>
            <Box
              sx={[
                {
                  display: "flex",

                  alignItems: "center",
                  my: 1,
                  mx: 2,
                },
                (theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                  },
                }),
                (theme) => ({
                  [theme.breakpoints.between("sm", "md")]: {
                    width: "100%",
                  },
                }),
              ]}
            >
              <CalendarMonthIcon sx={[{ width: 40, height: 40 }]} />
              <Typography sx={[]} component={"div"} px={2} variant="subtitle1">
                Every Last Friday, 12:000am - 2:00am
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <ChurchIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                Church Auditorium
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                my: 3,
                mx: 2,
              }}
            >
              <FmdGoodIcon sx={{ width: 40, height: 40 }} />
              <Typography component={"div"} px={2} variant="subtitle1">
                The Church Address
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default Activities;
