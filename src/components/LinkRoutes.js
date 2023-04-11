import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact"

const LinkRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
            expertise={personalDetails.expertise}
            collaboration={personalDetails.collaboration}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="/contact"
        element={
          <Contact />
        }
      />
    </Routes>
  );
};

export default LinkRoutes;
