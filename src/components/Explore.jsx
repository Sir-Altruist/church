import React from "react";
import { Box, Grid, Container, Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import images from "../assets/image.png";
import images2 from "../assets/image2.png";
import images3 from "../assets/image3.png";
import { orange } from "@mui/material/colors";

const Explore = () => {
  //sx={{ minHeight: "100vh" }}
  return (
    <Container style={{ minHeight: "100vh", padding: "10rem 0" }}>
      <Box
        sx={[
          { mx: 2, my: 4 },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {
              mx: 2,
              my: 3,
            },
          }),
          (theme) => ({
            [theme.breakpoints.down("md")]: {
              mx: 1,
              my: 3,
            },
          }),
        ]}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ px: 2 }} xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Worship"
                variant={"rounded"}
                sx={{ width: 60, height: 60 }}
                src={images}
              />
              <Typography py={2} px={2} color="#FF9800" variant="h4">
                Worship
              </Typography>{" "}
              <Typography
                textAlign="center"
                py={2}
                px={2}
                variant="body1"
                component={"p"}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ px: 2 }} xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Worship"
                variant={"rounded"}
                sx={{ width: 60, height: 60 }}
                src={images2}
              />
              <Typography py={2} px={2} color="#FF9800" variant="h4">
                Connect
              </Typography>{" "}
              <Typography
                py={2}
                textAlign="center"
                px={2}
                variant="body1"
                component={"p"}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ px: 2 }} xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Worship"
                variant={"rounded"}
                sx={[{ width: 60, height: 60 }]}
                src={images3}
              />
              <Typography
                py={2}
                textAlign="center"
                //   px={2}
                color="#FF9800"
                variant="h4"
              >
                God’s Love
              </Typography>{" "}
              <Typography
                py={2}
                px={2}
                variant="body1"
                textAlign="center"
                component={"p"}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={[
            { mx: 7, my: 5, bgcolor: orange[300] },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                mx: 2,
                my: 3,
              },
            }),
            (theme) => ({
              [theme.breakpoints.down("md")]: {
                mx: 1,
                my: 3,
              },
            }),
          ]}
        >
          <Typography
            mx={10}
            textAlign="center"
            color="white"
            py={3}
            px={3}
            variant="h3"
            fontWeight={"bold"}
            sx={[
              (theme) => ({
                [theme.breakpoints.down("sm")]: {
                  mx: 2,
                  my: 3,
                  fontSize: "2rem",
                  textAlign: "none",
                  py: 1,
                  px: 1,
                },
              }),
              (theme) => ({
                [theme.breakpoints.down("md")]: {
                  mx: 3,
                  my: 3,
                },
              }),
            ]}
          >
            A Christian Should Live For The Glory Of God And The Well-Being Of
            Others.
          </Typography>
          <Typography
            mx={2}
            textAlign="center"
            py={4}
            px={4}
            variant="body1"
            component={"p"}
            color="white"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Far far away,
            behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Explore;
