import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import latestBlog from "../assets/latest.png";
const Blog = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Box
        sx={[
          { mx: 4, my: 7 },
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
        <Typography py={2} textAlign="center" variant="h4">
          Blog
        </Typography>{" "}
        <Typography py={2} variant="h4">
          Latest
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}

          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ px: 1, py: 2 }} xs={12} sm={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={latestBlog}
                alt="latestBlog"
                sx={[
                  { width: "100%" },
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
              <Box sx={{ bgcolor: grey[200] }}>
                <CardContent>
                  <Typography color="#FF9800" variant="subtitle2">
                    June 4, 2022
                  </Typography>{" "}
                  <Typography py={1} px={1} fontWeight={800} variant="h5">
                    The Journey of faith
                  </Typography>
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
                  <Button
                    sx={{
                      ml: "auto",
                    }}
                    size="small"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
          <Grid sx={{ px: 1, py: 2 }} xs={12} sm={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={latestBlog}
                alt="latestBlog"
                sx={[
                  { width: "100%" },
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
              <Box sx={{ bgcolor: grey[200] }}>
                <CardContent>
                  <Typography color="#FF9800" variant="subtitle2">
                    June 4, 2022
                  </Typography>{" "}
                  <Typography py={1} px={1} fontWeight={800} variant="h5">
                    The Journey of faith
                  </Typography>
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
                  <Button
                    sx={{
                      ml: "auto",
                    }}
                    size="small"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
          <Grid sx={{ px: 1, py: 2 }} xs={12} sm={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={latestBlog}
                alt="latestBlog"
                sx={[
                  { width: "100%" },
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
              <Box sx={{ bgcolor: grey[200] }}>
                <CardContent>
                  <Typography color="#FF9800" variant="subtitle2">
                    June 4, 2022
                  </Typography>{" "}
                  <Typography
                    sx={{ textAlign: "center" }}
                    py={1}
                    px={1}
                    fontWeight={800}
                    variant="h5"
                  >
                    The Journey of faith
                  </Typography>
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
                  <Button
                    sx={{
                      ml: "auto",
                    }}
                    size="small"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Typography py={2} variant="h4">
          Sermon
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid sx={{ px: 1, py: 2 }} xs={12} sm={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={latestBlog}
                alt="latestBlog"
                sx={[
                  { width: "100%" },
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
              <Box sx={{ bgcolor: grey[200] }}>
                <CardContent>
                  <Typography color="#FF9800" variant="subtitle2">
                    June 4, 2022
                  </Typography>{" "}
                  <Typography py={1} px={1} fontWeight={800} variant="h5">
                    The Journey of faith
                  </Typography>
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
                  <Button
                    sx={{
                      ml: "auto",
                    }}
                    size="small"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
          <Grid sx={{ px: 1, py: 2 }} xs={12} sm={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={latestBlog}
                alt="latestBlog"
                sx={[
                  { width: "100%" },
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
              <Box sx={{ bgcolor: grey[200] }}>
                <CardContent>
                  <Typography color="#FF9800" variant="subtitle2">
                    June 4, 2022
                  </Typography>{" "}
                  <Typography py={1} px={1} fontWeight={800} variant="h5">
                    The Journey of faith
                  </Typography>
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
                  <Button
                    sx={{
                      ml: "auto",
                    }}
                    size="small"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
          <Grid sx={{ px: 1, py: 2 }} xs={12} sm={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                image={latestBlog}
                alt="latestBlog"
                sx={[
                  { width: "100%" },
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
              <Box sx={{ bgcolor: grey[200] }}>
                <CardContent>
                  <Typography color="#FF9800" variant="subtitle2">
                    June 4, 2022
                  </Typography>{" "}
                  <Typography
                    sx={{ textAlign: "center" }}
                    py={1}
                    px={1}
                    fontWeight={800}
                    variant="h5"
                  >
                    The Journey of faith
                  </Typography>
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
                  <Button
                    sx={{
                      ml: "auto",
                    }}
                    size="small"
                  >
                    Read more...
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
