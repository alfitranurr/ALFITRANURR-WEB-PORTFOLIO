import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./main/navbar";
import Footer from "./main/footer";
import NavbarMobile from "./mobile/navbar_mobile";
import FooterMobile from "./mobile/footer_mobile";
import Home from "./pages/home";
// import AlertInitially from "./components/Alerts/alertInitially";

/* DATA */
import DataVisualization from "./components/Projects/Data/DataVisualization/datavisualization";
import ArtificialIntelligence from "./components/Projects/Data/ArtificialIntelligence/artificialintelligence";
import DataAutomation from "./components/Projects/Data/DataAutomation/dataautomation";
import DataAnalytics from "./components/Projects/Data/DataAnalytic/dataanalytic";
import DataModelingSimulation from "./components/Projects/Data/DataModelingSimulation/datamodelingsimulation";

/* BEYOND DATA */
import DigitalMarketing from "./components/Projects/BeyondData/DigitalMarketing/digitalmarketing";
import MobileDevelopment from "./components/Projects/BeyondData/MobileDevelopment/mobiledevelopment";
import SmartDeviceIOT from "./components/Projects/BeyondData/SmartDeviceIOT/smartdeviceiot";
import WebDevelopment from "./components/Projects/BeyondData/WebDevelopment/webdevelopment";
import GraphicDesign from "./components/Projects/BeyondData/GraphicDesign/graphicdesign";

/* CERTIFICATE */
import Competition from "./components/Certificate/Competition/competition";
import SeminarWorkshop from "./components/Certificate/Seminar-Workshop/seminar-workshop";
import LicenseCertification from "./components/Certificate/License-Certification/license-certification";
import CommitteeOrganization from "./components/Certificate/Committee-Organization/committee-organization";

/* EXPERIENCE */
import FullExperience from "./components/Experience/fullExperience";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* NAVBAR FOR DEKSTOP SCREENS */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* NAVBAR FOR MOBILE SCREENS */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

        {/* ROUTES FOR THE MAIN CONTENT */}
        <div className="flex-grow relative">
          {/* SHOW THE ALERT INITIALLY */}
          {/* <AlertInitially /> */}
          <Routes>
            {/* MAIN PAGE */}
            <Route path="/" element={<Home />} />

            {/* EXPERIENCE */}
            <Route path="/experience/full" element={<FullExperience />} />

            {/* DATA PROJECTS */}
            <Route
              path="/components/Projects/Data/DataVisualization/datavisualization"
              element={<DataVisualization />}
            />
            <Route
              path="/components/Projects/Data/ArtificialIntelligence/artificialintelligence"
              element={<ArtificialIntelligence />}
            />
            <Route
              path="/components/Projects/Data/DataAutomation/dataautomation"
              element={<DataAutomation />}
            />
            <Route
              path="/components/Projects/Data/DataAnalytic/dataanalytic"
              element={<DataAnalytics />}
            />
            <Route
              path="/components/Projects/Data/DataModelingSimulation/datamodelingsimulation"
              element={<DataModelingSimulation />}
            />
            {/* BEYOND DATA PROJECTS */}
            <Route
              path="/components/Projects/DigitalMarketing/digitalmarketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/components/Projects/MobileDevelopment/mobiledevelopment"
              element={<MobileDevelopment />}
            />
            <Route
              path="/components/Projects/SmartDeviceIOT/smartdeviceiot"
              element={<SmartDeviceIOT />}
            />
            <Route
              path="/components/Projects/WebDevelopment/webdevelopment"
              element={<WebDevelopment />}
            />
            <Route
              path="/components/Projects/GraphicDesign/graphicdesign"
              element={<GraphicDesign />}
            />
            {/* CERTIFICATES */}
            <Route path="/certificate/competition" element={<Competition />} />
            <Route
              path="/certificate/seminar-workshop"
              element={<SeminarWorkshop />}
            />
            <Route
              path="/certificate/license-certification"
              element={<LicenseCertification />}
            />
            <Route
              path="/certificate/committee-organization"
              element={<CommitteeOrganization />}
            />
          </Routes>
        </div>

        {/* FOOTER FOR DEKSTOP SCREENS */}
        <div className="hidden lg:block">
          <Footer />
        </div>

        {/* FOOTER FOR MOBILE SCREENS */}
        <div className="lg:hidden">
          <FooterMobile />
        </div>
      </div>
    </Router>
  );
};

export default App;
