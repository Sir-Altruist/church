import React from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  // Button,
} from "@mui/material";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import testimonyImage from "../assets/testimony.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const SlideContent = () => {
  return (
    <Box
      sx={[
        {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "black",
          // height: "100vh",
          width: "100%",
          px: 4,
          minHeight: "100vh",
          py: 6,
          my: 3,
        },
        (theme) => ({
          [theme.breakpoints.down("sm")]: {
            px: 2,
          },
        }),
      ]}
    >
      <Typography
        sx={[
          {
            fontWeight: "bold",
            my: 4,
            px: 4,
            pb: 7,
            textAlign: "center",
            fontSize: 30,
            textTransform: "uppercase",
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              px: 2,
              fontSize: 16,
              pb: 3,
              textTransform: "capitalize",
            },
          }),
        ]}
        color="white"
      >
        Live Transforming Testimonies
      </Typography>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
        <Item>
          <Card>
            <CardMedia
              component="img"
              image={testimonyImage}
              alt="testimony image"
              sx={[
                { width: 100, mx: "auto", mt: 4 },
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
            <Box
              sx={
                {
                  /* bgcolor: grey[200] */
                }
              }
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  py={1}
                  // px={2}
                  variant="body1"
                  component={"p"}
                >
                  Far far away, behind the word mountains, far from the
                  countries
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    ml: "auto",
                  }}
                  size="small"
                >
                  John Doe
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Item>
        <Item>
          {" "}
          <Card>
            <CardMedia
              component="img"
              image={testimonyImage}
              alt="testimony Image"
              sx={[
                { width: 100, mx: "auto", mt: 4 },
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
            <Box
              sx={
                {
                  /* bgcolor: grey[200] */
                }
              }
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  py={1}
                  px={2}
                  variant="body1"
                  component={"p"}
                >
                  Far far away, behind the word mountains, far from the
                  countries
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    ml: "auto",
                    fontWeight: "bold",
                  }}
                >
                  John Doe
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Item>

        <Item>
          {" "}
          <Card>
            <CardMedia
              component="img"
              image={testimonyImage}
              alt="testimony Image"
              sx={[
                { width: 100, mx: "auto", mt: 4 },
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
            <Box
              sx={
                {
                  /* bgcolor: grey[200] */
                }
              }
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  py={1}
                  px={2}
                  variant="body1"
                  component={"p"}
                >
                  Far far away, behind the word mountains, far from the
                  countries
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    ml: "auto",
                    fontWeight: "bold",
                  }}
                >
                  John Doe
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Item>
        <Item>
          {" "}
          <Card>
            <CardMedia
              component="img"
              image={testimonyImage}
              alt="testimony Image"
              sx={[
                { width: 100, mx: "auto", mt: 4 },
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
            <Box
              sx={
                {
                  /* bgcolor: grey[200] */
                }
              }
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  py={1}
                  px={2}
                  variant="body1"
                  component={"p"}
                >
                  Far far away, behind the word mountains, far from the
                  countries
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    ml: "auto",
                    fontWeight: "bold",
                  }}
                >
                  John Doe
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Item>
        <Item>
          {" "}
          <Card>
            <CardMedia
              component="img"
              image={testimonyImage}
              alt="testimony Image"
              sx={[
                { width: 100, mx: "auto", mt: 4 },
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
            <Box
              sx={
                {
                  /* bgcolor: grey[200] */
                }
              }
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  py={1}
                  px={2}
                  variant="body1"
                  component={"p"}
                >
                  Far far away, behind the word mountains, far from the
                  countries
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    ml: "auto",
                    fontWeight: "bold",
                  }}
                >
                  John Doe
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Item>
        <Item>
          {" "}
          <Card>
            <CardMedia
              component="img"
              image={testimonyImage}
              alt="testimony Image"
              sx={[
                { width: 100, mx: "auto", mt: 4 },
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
            <Box
              sx={
                {
                  /* bgcolor: grey[200] */
                }
              }
            >
              <CardContent>
                <Typography
                  textAlign="center"
                  py={1}
                  px={2}
                  variant="body1"
                  component={"p"}
                >
                  Far far away, behind the word mountains, far from the
                  countries
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    ml: "auto",
                    fontWeight: "bold",
                  }}
                >
                  John Doe
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Item>
      </Carousel>
    </Box>
  );
};

export default SlideContent;
