import React from "react";
import RentalPropertyChildTest from "./RentalPropertyChild";
import { properties } from "./RentalPropertiesData";

const PropertyList = () => {
  return (
    <div>
      {properties.map((property) => (
        <RentalPropertyChildTest key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
