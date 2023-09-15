import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Property {
  id: number;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
}

function DataTest() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/properties')
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Properties</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {properties.map((property) => (
              <li key={property.id}>


<div className='flex w-full '>
  <div className='w-1/2 h-auto p-4'>
    <img
      src={property.imageUrl1}
      alt=""
      className="w-full h-auto object-cover rounded-md cursor-pointer"
      onClick={() => handleImageClick(property.imageUrl1)}
    />
  </div>

  <div className="flex w-1/2 h-auto flex-wrap p-4">
    <div className='flex w-full'>
      <img
        src={property.imageUrl1}
        alt=""
        className="w-1/2 h-auto object-cover rounded-md cursor-pointer"
        onClick={() => handleImageClick(property.imageUrl1)}
      />
      <img
        src={property.imageUrl2}
        alt=""
        className="w-1/2 h-auto object-cover rounded-md cursor-pointer"
        onClick={() => handleImageClick(property.imageUrl2)}
      />
    </div>
    <div className='flex w-full'>
      <img
        src={property.imageUrl3}
        alt=""
        className="w-1/2 h-auto object-cover rounded-md cursor-pointer"
        onClick={() => handleImageClick(property.imageUrl3)}
      />
      <img
        src={property.imageUrl4}
        alt=""
        className="w-1/2 h-auto object-cover rounded-md cursor-pointer"
        onClick={() => handleImageClick(property.imageUrl4)}
      />
    </div>
  </div>
</div>



                <h2>{property.address}</h2>
                <p>Price: {property.price}</p>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
                <p>Parking: {property.parking ? 'Yes' : 'No'}</p>
              </li>
            ))}
          </ul>

          {selectedImage && (
            <div>
              <h2>Selected Image</h2>
              <img src={selectedImage} alt="Selected" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default DataTest;
