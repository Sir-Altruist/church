import { Box } from "@mui/material";
import React from "react";
// import Example from "../components/Example";
import Header from "../components/Header";
import bgImage from "../assets/landing.png";
// import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Explore from "../components/Explore";
import Activities from "../components/Activities";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import SlideContent from "../components/SlideContent";

const Landing = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "50",
          color: "#f5f5f5",
        }}
      >
        <Header />
        <Section />
      </Box>
      <Box>
        <Explore />
        <Activities />
        <SlideContent />
        <Blog />
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
