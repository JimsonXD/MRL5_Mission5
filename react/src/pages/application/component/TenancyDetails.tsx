import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TenancyDetails = () => {
  return (
    
    <div className="flex flex-col justify-center px-24 bg-white p-8">
      
      <form>
        <div className="space-y-12 bg-platinum p-6 rounded-lg shadow-md">

<div></div>
          <div className="border-gray-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-8">
              Tenancy Details
            </h2>
            

            <div className="grid grid-cols-1 gap-8">
              <div>
                <input
                  type="text"
                  name="address-of-tenancy"
                  id="address-of-tenancy"
                  autoComplete="address-of-tenancy"
                  placeholder="Address of Tenancy"
                  className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>



<div className="flex w-full justify-between">
              <div className="w-1/4 flex">
                <input
                  type="text"
                  name="rent"
                  id="rent"
                  autoComplete="rent"
                  placeholder="$ Rent"
                  className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                />
              </div>
              <div className="flex w-3/4 justify-between px-16 py-2">
                <label className="">
                  <input type="radio" name="payment-frequency" value="weekly" />
                  Weekly
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="payment-frequency"
                    value="fortnightly"
                  />
                  Fortnightly
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment-frequency"
                    value="monthly"
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
            <label className="flex items-center space-x-8 gap-2 ">
              <input type="radio" name="tenancy-type" value="fixed"/>
              
              Fixed
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ruby">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="text-white text-sm"
                />
              </div>
            </label>
            <label className="flex items-center space-x-8 gap-2">
              <input type="radio" name="tenancy-type" value="periodic" />
              Periodic
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ruby">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="text-white text-sm"
                />
              </div>
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
            />
          </div>

          <h2 className="text-lg text-gray-800">
            Rent to be paid at
          </h2>




          <div className="flex space-x-12 gap-12">
            <label className="flex items-center gap-2">
              <input type="radio" name="tenancy-type" value="fixed" />
              Landlord physical address
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="tenancy-type" value="periodic" />
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
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Account Number"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Account Holder Name"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
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
                name="signed-by-tenant"
                id="signed-by-tenant"
                autoComplete="sign-by-tenant"
                placeholder="Signed by Tenant"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name="date-signed-by-tenant"
                id="date-signed-by-tenant"
                autoComplete="date-signed-by-tenant"
                placeholder="Date signed by tenant"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="signed-by-landlord"
                id="signed-by-landlord"
                autoComplete="signed-by-landlord"
                placeholder="Signed by Landlord"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name="date-signed-by-landlord"
                id="date-signed-by-landlord"
                autoComplete="date-signed-by-landlord"
                placeholder="Date signed by Landlord"
                className="border-1 bg-white block w-full rounded-md border-gray-300 py-2 px-3 text-gray-800 shadow-sm placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <button className="border-2 rounded-lg border-red px-16 text-red bg-white shadow-lg py-2  transform hover:scale-110 transition-transform duration-300 ease-in-out">
              Save for later
            </button>


            <Link to="/confirmation-details">
            <button className="border-2 rounded-lg border-red px-16 text-white bg-red shadow-lg py-2  transform hover:scale-110 transition-transform duration-300 ease-in-out">
              SUBMIT
            </button>
            </Link>



          </div>
        </div>
      </form>
    </div>
  );
};

export default TenancyDetails;
