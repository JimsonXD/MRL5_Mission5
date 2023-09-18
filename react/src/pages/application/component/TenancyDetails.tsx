import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom"

const TenancyDetails = () => {
  // Create a state object to manage form data
  const [formData, setFormData] = useState({
    addressOfTenancy: "",
    rent: "",
    bond: "",
    firstName: "",
    lastName: "",
    accountDetails: "",
    bankName: "",
    signedByTenant: "",
    dateSignedByTenant: "",
    signedByLandlord: "",
    dateSignedByLandlord: "",
  });

  // Handle input changes and update form data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send form data to the server
      await axios.post("http://localhost:8080/api/submittenancydetails", formData);
      // Redirect to a confirmation page or perform other actions as needed
     
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center px-24 bg-white p-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="border-b border-gray-300 pb-12">
            <h2 className="text-lg font-semibold text-gray-800">
              Tenancy Details
            </h2>

            <div className="grid grid-cols-1 gap-8">
              <div>
                <input
                  type="text"
                  name="addressOfTenancy"
                  id="addressOfTenancy"
                  autoComplete="address-of-tenancy"
                  placeholder="Address of Tenancy"
                  className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="flex w-full">
                <div className="mt-2 w-1/2 pr-24">
                  <input
                    type="text"
                    name="rent"
                    id="rent"
                    autoComplete="rent"
                    placeholder="$ Rent"
                    className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 space-x-4 gap-24 w-full px-8">
                  <label className="gap-8 space-x-8 items-center">
                    <input
                      type="radio"
                      name="paymentFrequency"
                      value="weekly"
                      
                    />
                    Weekly
                  </label>
                  <label className="p-16">
                    <input
                      type="radio"
                      name="paymentFrequency"
                      value="fortnightly"
                  
                    />
                    Fortnightly
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentFrequency"
                      value="monthly"
                
                    />
                    Monthly
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Tenancy Type
          </h2>

          <div className="flex gap-32">
            <label className="flex items-center space-x-8 gap-2">
              <input
                type="radio"
                name="tenancyType"
                value="fixed"

              />
              Fixed
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="text-white text-sm"
                />
              </div>
            </label>
            <label className="flex items-center space-x-8 gap-2">
              <input
                type="radio"
                name="tenancyType"
                value="periodic"

              />
              Periodic
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="text-white text-sm"
                />
              </div>
            </label>
          </div>

          <div className="mt-2 w-1/4">
            <input
              type="text"
              name="bond"
              id="bond"
              autoComplete="bond"
              placeholder="$ Bond"
              className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Rent to be paid at
          </h2>

          <div className="flex space-x-12 gap-12">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="landlordAddress"
                value="Landlord physical address"
        
              />
              Landlord physical address
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="bankTransfer"
                value="Bank Transfer"

              />
              Bank Transfer
            </label>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Bank Details
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                placeholder="First Name"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                placeholder="Last Name"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="accountDetails"
                id="accountDetails"
                autoComplete="account-details"
                placeholder="Account Details"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="bankName"
                id="bankName"
                autoComplete="bank-name"
                placeholder="Bank Name"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <p>
            The Landlord and the tenant agree that:
            <br />
            <br />
            The tenancy will commence on the day of 20
            <br />
            <br />
            This is a periodic tenancy and may be ended by either party giving
            notice as required under the Residential Tenancies Act 1986.
            <br /> See page 4 of this agreement for more information <br />
            <br />
            or
            <br />
            <br />
            This tenancy is for a fixed term, ending on the day of. 20
            <br />
            <br />
            DO NOT SIGN THIS AGREEMENT UNLESS YOU UNDERSTAND AND AGREE WITH
            EVERYTHING IN IT
            <br />
            THE LANDLORD AND TENANT SIGN HERE TO SHOW THAT THEY AGREE TO ALL THE
            TERMS AND CONDITIONS IN THE TENANCY AGREEMENT
            <br /> AND THAT EACH
            <br />
            PARTY HAS READ THE NOTES OF THIS AGREEMENT, READ ONCE AGAIN
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            SIGNATURE
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="signedByTenant"
                id="signedByTenant"
                autoComplete="signed-by-tenant"
                placeholder="Signed by Tenant"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="dateSignedByTenant"
                id="dateSignedByTenant"
                autoComplete="date-signed-by-tenant"
                placeholder="Date signed by tenant"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="signedByLandlord"
                id="signedByLandlord"
                autoComplete="signed-by-landlord"
                placeholder="Signed by Landlord"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="dateSignedByLandlord"
                id="dateSignedByLandlord"
                autoComplete="date-signed-by-landlord"
                placeholder="Date signed by Landlord"
                className="border-2 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <button className="btn btn-outline px-16 text-red-600">
              Save for later
            </button>

            
            
            <button 
            className="btn btn-primary bg-red-600 px-16 text-white">
              Submit
            </button>

           
          </div>
        </div>
      </form>
    </div>
  );
};

export default TenancyDetails;
