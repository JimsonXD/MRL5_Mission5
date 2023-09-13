import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDownload,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

interface PropertyListingProps {
  imageUrl: string;
  price: string;
  location: string;
}

const PropertyListing: React.FC<PropertyListingProps> = ({
  imageUrl,
  price,
  location,
}) => (
  <div className="flex bg-gray-100 rounded-lg shadow-lg p-4">
    <div className="px-4 flex items-center">
      <img src={imageUrl} alt="Property" className="h-48 w-72 rounded-md" />
    </div>

    <div className="flex-1 flex flex-col justify-between ml-4">
      <div>
        <span className="text-lg">{price}</span>
        <p className="mt-4 text-sm text-gray-800 pt-10">
          <FontAwesomeIcon icon={faLocationDot} size="lg" /> {location}
        </p>
      </div>

      <div className="flex mt-4 pr-36">
        <div className="flex-1">
          <FontAwesomeIcon icon={faDownload} size="lg" /> Download
        </div>
        <div className="flex-1">
          <FontAwesomeIcon icon={faShare} size="lg" /> Share
        </div>
      </div>
    </div>
  </div>
);

const MyTenancyApplicationChild = () => (
  <div className="bg-white pb-28 text-black">
    <div className="flex flex-col justify-center bg-white pt-8 mx-32">
      <h1>My Tenancy Application</h1>
      <h2 className="pt-12 pb-12 text-red">
        New Application sent by property manager
      </h2>

      <PropertyListing
        imageUrl="https://s.oneroof.co.nz/image/17/3d/173d25d5aeed0933252ed1728e65adb6.jpg?x-oss-process=image/quality,q_80/resize,w_630/format,webp"
        price="400 per week"
        location="4 Sunnyvale Road, Greenlane, Auckland City"
      />

      <h2 className="pt-20 pb-12 text-red">
        Previous Tenancy Applications History
      </h2>
      <div className="mb-8">
        <PropertyListing
          imageUrl="https://s.oneroof.co.nz/image/17/3d/173d25d5aeed0933252ed1728e65adb6.jpg?x-oss-process=image/quality,q_80/resize,w_630/format,webp"
          price="400 per week"
          location="4 Sunnyvale Road, Greenlane, Auckland City"
        />
      </div>
      <div className="mb-8 mt-4">
        <PropertyListing
          imageUrl="https://s.oneroof.co.nz/image/17/3d/173d25d5aeed0933252ed1728e65adb6.jpg?x-oss-process=image/quality,q_80/resize,w_630/format,webp"
          price="400 per week"
          location="4 Sunnyvale Road, Greenlane, Auckland City"
        />
      </div>
    </div>
  </div>
);

export default MyTenancyApplicationChild;
