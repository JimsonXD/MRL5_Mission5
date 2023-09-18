import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const TenancyDetails = () => {
  const [formData, setFormData] = useState({
    addressOfTenancy: "",
    rent: "",
    bond: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/submittenancydetails", formData);
      alert("Form data submitted successfully");
      
      navigate('/confirmation-details'); 
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      alert("An error occurred");
    }
  };
  

  return (
    <div className="flex flex-col justify-center px-24 bg-white p-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 bg-platinum p-6 rounded-lg shadow-md">

          <div className="border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-8">
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
                      onChange={handleChange}
                    />
                    Weekly
                  </label>
                  <label className="p-16">
                    <input
                      type="radio"
                      name="paymentFrequency"
                      value="fortnightly"
                      onChange={handleChange}
                    />
                    Fortnightly
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentFrequency"
                      value="monthly"
                      onChange={handleChange}
                    />
                    Monthly
                  </label>
                </div>
              </div>
            </div>
          </div>
 
          <h2 className="text-lg text-gray-800">
            Tenancy Type
          </h2>

          <div className="flex gap-32">
            <label className="flex items-center space-x-8 gap-2">
              <input
                type="radio"
                name="tenancyType"
                value="fixed"
                onChange={handleChange}
              />
              Fixed
            </label>
            <label className="flex items-center space-x-8 gap-2">
              <input
                type="radio"
                name="tenancyType"
                value="periodic"
                onChange={handleChange}
              />
              Periodic
            </label>
          </div>

          <div className="mt-4 w-1/4">
            <input
              type="text"
              name="bond"
              id="bond"
              autoComplete="bond"
              placeholder="$ Bond Amount"
              className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              onChange={handleChange}
            />
          </div>

          <h2 className="text-lg text-gray-800">
            Rent to be paid at
          </h2>

          <div className="flex space-x-12 gap-12">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="landlordAddress"
                value="Landlord physical address"
                onChange={handleChange}
              />
              Landlord physical address
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="bankTransfer"
                value="Bank Transfer"
                onChange={handleChange}
              />
              Bank Transfer
            </label>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">
            Bank Details
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                placeholder="Account Number"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                placeholder="Account Holder Name"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Bank Name"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Branch"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <p>
            The Landlord and the tenant agree that:
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
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
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
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
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
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
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
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <button
              className="border-2 rounded-lg border-red px-16 text-red bg-white shadow-lg py-2  transform hover:scale-110 transition-transform duration-300 ease-in-out"
              type="button"
            >
              Save for later
            </button>

            <button
              className="bg-red rounded-lg uppercase px-16 text-white shadow-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TenancyDetails;
