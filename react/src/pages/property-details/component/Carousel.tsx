import React, { useState } from "react";


const bigImage = "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6630/the-sunset-1-front-elevated-elevation_m.webp";
const img1 = "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6630/the-sunset-1-front-elevated-elevation_m.webp";
const img2 = "https://rimh2.domainstatic.com.au/QdBSMafa2OwNiObaiynVMEfpfkw=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018223067_13_1_221124_105249-w1500-h1000";
const img3 = "https://rimh2.domainstatic.com.au/q8tQn_hsZp9_aDg8hGTCdZZsCFA=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018594349_3_1_230619_042239-w998-h665";
const img4 = "https://rimh2.domainstatic.com.au/Gcrduo8Kxyfh4mEZ2w7_PPjlVKo=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018594349_4_1_230619_042239-w998-h665";
const img5 = "https://rimh2.domainstatic.com.au/CzPGE8F0fFcdX43uuE016Xogqnw=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018594349_9_1_230619_042239-w1440-h1080";

function Carousel() {
  const [selectedImage, setSelectedImage] = useState(bigImage);

  const handleImageClick = (image: React.SetStateAction<string>) => {
    setSelectedImage(image);
  };

  return (
    <div className="text-center w-full">
      <div className="mt-8 w-full">
        <img
          src={selectedImage}
          alt="bigImage"
          className="w-full h-96 object-cover px-28 rounded-lg cursor-pointer"  
        />
      </div>

      <div className="flex justify-center m-8 gap-4">
        <img src={img1} alt="" className="w-48 h-32 object-cover rounded-md cursor-pointer" onClick={() => handleImageClick(img1)}/>
        <img src={img2} alt="" className="w-48 h-32 object-cover rounded-md cursor-pointer" onClick={() => handleImageClick(img2)}/>
        <img src={img3} alt="" className="w-48 h-32 object-cover rounded-md cursor-pointer" onClick={() => handleImageClick(img3)}/>
        <img src={img4} alt="" className="w-48 h-32 object-cover rounded-md cursor-pointer" onClick={() => handleImageClick(img4)}/>
        <img src={img5} alt="" className="w-48 h-32 object-cover rounded-md cursor-pointer" onClick={() => handleImageClick(img5)}/>
      </div>
    </div>
  );
}

export default Carousel;
