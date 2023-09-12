import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./commonComponents/Main";
import Home from "./pages/home/Home";
// import RentalPropertySearch from "./pages/rental-property-search/RentalPropertySearch";
// import PropertyDetails from "./pages/property-details/PropertyDetails";
// import MyTenancyApplication from "./pages/my-tenancy-application/MyTenancyApplication";
// import Application from "./pages/application/Application";
// import ConfirmationDetails from "./pages/confirmation-details/ConfirmationDetails";



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" Component={Home} />
        {/* <Route path="/rental-property-search" Component={RentalPropertySearch} />
        <Route path="/property-details" Component={PropertyDetails} />
        <Route path="/my-tenancy-application" Component={MyTenancyApplication} />
        <Route path="/application" Component={Application} />
        <Route path="/confirmation-details" Component={ConfirmationDetails} /> */}
         <Route path="/week1" Component={Main } /> 


    </Routes>
    </Router>
  );
}

export default App;
