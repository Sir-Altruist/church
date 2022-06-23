import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { orange } from "@mui/material/colors";
import Typewriter from "typewriter-effect";

const Section = () => {
  return (
    <Box
      sx={[
        {
          display: "flex ",

          alignContent: "flex-start",
          mt: "100px",
          // ml: { md: 10 },

          alignItems: "center",
        },
        (theme) => ({
          [theme.breakpoints.up("sm")]: {
            ml: 10,
          },
        }),
        (theme) => ({
          [theme.breakpoints.down("sm")]: {
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
          },
        }),
      ]}
    >
      <Box
        sx={{
          display: "flex ",
          flexDirection: "column",

          mt: "100px",

          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Typography
          sx={[
            {
              color: "white",
              fontSize: 50,
              px: 2,
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: 30,
                px: 1,
              },
            }),
          ]}
          variant="h4"
        >
          The Church of God
        </Typography>{" "}
        <Typography
          sx={[
            {
              color: "white",

              py: 1,
              fontSize: 20,
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: 16,
                px: 1,
              },
            }),
          ]}
          variant="h6"
        >
          <Typewriter
            options={{
              strings: "   Worship. Word. Spirit",
              autoStart: true,
              loop: true,
            }}
            // onInit={(typewriter) => {
            //   typewriter

            //     .typeString("   Worship. Word. Spirit")

            //     .pauseFor(5000)
            //     .deleteAll()
            //     // .typeString(" Worship. Word. Spirit")
            //     .start();
            // }}
          />
        </Typography>
        <Button
          sx={[
            {
              background: "#FF9800",
              my: 2,
              px: 2,
              py: 2,
              fontSize: 16,
              "&:hover": { background: orange[600] },
              fontWeight: 850,
            },
            (theme) => ({
              [theme.breakpoints.down("sm")]: {
                fontSize: 8,
                px: 1,
              },
            }),
          ]}
          variant="contained"
        >
          Stream live programmes here
        </Button>
      </Box>
    </Box>
  );
};

export default Section;
