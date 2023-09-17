import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./commonComponents/week1/Main";
import CrudWeek1 from "./commonComponents/week1/CrudWeek1"
import Home from "./pages/home/Home";
import RentalPropertySearch from "./pages/rental-property-search/RentalPropertySearch";
import PropertyDetails from "./pages/property-details/PropertyDetails";
import MyTenancyApplication from "./pages/my-tenancy-application/MyTenancyApplication";
import Application from "./pages/application/Application";
import ConfirmationDetails from "./pages/confirmation-details/ConfirmationDetails";
import DataTest from "./DataTest";




function App() {
  return (
    <Router>
      <Routes>


         <Route path="/" Component={Home} />
        <Route path="/rental-property-search" Component={RentalPropertySearch} />
        <Route path="/property-details" Component={PropertyDetails} />
        <Route path="/my-tenancy-application" Component={MyTenancyApplication} />
        <Route path="/application" Component={Application} />
        <Route path="/confirmation-details" Component={ConfirmationDetails} />

        <Route path="/week1" Component={Main} /> 
        <Route path="week01" Component={CrudWeek1} />     

        <Route path="/" Component={DataTest} />    


    </Routes>
    </Router>
  );
}

export default App;
