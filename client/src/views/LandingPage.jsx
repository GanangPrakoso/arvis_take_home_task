import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// components
import Navbar from "../components/Navbar";
import Slider from "../components/landing-page/Slider";
import OnlineExclusive from "../components/landing-page/OnlineExclusive";
import SocialMediaSection from "../components/landing-page/SocialMediaSection";

function LandingPage() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Swal.fire("", "Have you signed in yet?", "question");
      history.push("/signin");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <OnlineExclusive />
      <SocialMediaSection />
    </>
  );
}

export default LandingPage;
