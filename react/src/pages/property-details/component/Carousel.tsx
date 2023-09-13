import React, { useState } from "react";

const bigImage = "https://www.thehousedesigners.com/images/plans/01/ROD/bulk/5425halifax1_m.webp";
const img1 = "https://www.thehousedesigners.com/images/plans/01/ROD/bulk/5425halifax1_m.webp";
const img2 = "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6630/the-sunset-1-front-elevated-elevation_m.webp";
const img3 = "https://www.thehousedesigners.com/images/plans/01/UDC/bulk/4270/e274-22132-aj-handa_view1_m.webp";
const img4 = "https://www.thehousedesigners.com/images/plans/01/JRD/bulk/7249/2020-windermere-salish-175_m.webp";
const img5 = "https://www.thehousedesigners.com/images/plans/01/EXB/bulk/7807/2425-fall_photo-1_m.webp";

function Carousel() {
  const [selectedImage, setSelectedImage] = useState(bigImage);

  const handleImageClick = (image: React.SetStateAction<string>) => {
    setSelectedImage(image);
  };

  return (
    <div className="text-center">
      <div className="px-24 mt-8">
        <img
          src={selectedImage}
          alt="bigImage"
          className="mx-auto max-w-full h-auto"
        />
      </div>

      <div className="flex justify-center m-8 gap-4">
        <img src={img1} alt="" className="w-32 h-32 object-cover" onClick={() => handleImageClick(img1)}/>
        <img src={img2} alt="" className="w-32 h-32 object-cover" onClick={() => handleImageClick(img2)}/>
        <img src={img3} alt="" className="w-32 h-32 object-cover" onClick={() => handleImageClick(img3)}/>
        <img src={img4} alt="" className="w-32 h-32 object-cover" onClick={() => handleImageClick(img4)}/>
        <img src={img5} alt="" className="w-32 h-32 object-cover" onClick={() => handleImageClick(img5)}/>
      </div>
    </div>
  );
}

export default Carousel;
