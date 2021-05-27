import React from "react";

import NavBar from "./NavBar";
import MastheadSection from "./MastheadSection";
import PortfolioSection from "./PortFolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";
import PortfolioModal from "./PortfolioModal";

const App = () => 
(
   <div>
       <NavBar />
       <MastheadSection />
       <PortfolioSection />
       <AboutSection />
       <ContactSection />
       <Footer />
       <CopyrightSection />
       <PortfolioModal />
   </div>
);

export default App;