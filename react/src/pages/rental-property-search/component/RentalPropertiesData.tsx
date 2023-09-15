export type Property = {
    id: number;
    imageUrl1: string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
    imageUrl5: string;
    address: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
  };
  
  export const properties: Property[] = [
    {
      id: 1,
      imageUrl1: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6630/the-sunset-1-front-elevated-elevation_m.webp",
      imageUrl2: "https://rimh2.domainstatic.com.au/QdBSMafa2OwNiObaiynVMEfpfkw=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018223067_13_1_221124_105249-w1500-h1000",
      imageUrl3: "https://rimh2.domainstatic.com.au/q8tQn_hsZp9_aDg8hGTCdZZsCFA=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018594349_3_1_230619_042239-w998-h665",
      imageUrl4: "https://rimh2.domainstatic.com.au/Gcrduo8Kxyfh4mEZ2w7_PPjlVKo=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018594349_4_1_230619_042239-w998-h665",
      imageUrl5: "https://rimh2.domainstatic.com.au/CzPGE8F0fFcdX43uuE016Xogqnw=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018594349_9_1_230619_042239-w1440-h1080",
      price: "$400 per week",
      address: "123 Main St, City, State",
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
    },
    {
      id: 2,
      imageUrl1: "https://www.thehousedesigners.com/images/plans/01/UDC/uploads/e261-ray-g-project-view2_m.webp",
      imageUrl2: "https://rimh2.domainstatic.com.au/DYs38-q8tJm2QBlv2HccPTmyolM=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018448350_1_1_230329_060951-w1673-h1125",
      imageUrl3: "https://rimh2.domainstatic.com.au/gLCHJWTjEBN8YmYhdYBqVBf0sRA=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018448350_8_1_230329_060951-w1673-h1125",
      imageUrl4: "https://rimh2.domainstatic.com.au/AMvY6lG93fiLdtFlDdfKX8MEHdA=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018515858_2_1_230512_105420-w1600-h1066",
      imageUrl5: "https://rimh2.domainstatic.com.au/O5uR8fwNvMTnWOcplXu_xlcpScc=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018515858_8_1_230512_105420-w1600-h1066",
      price: "$500 per week",
      address: "126 Main St, City, State",
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
    },
    {
      id: 3,
      imageUrl1: "https://www.thehousedesigners.com/images/plans/01/AMD/import/4742/4742_front_rendering_9408_m.webp",
      imageUrl2: "https://rimh2.domainstatic.com.au/Rl-EowaZf8QDJWK0sALrddnuzn4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018515858_3_1_230512_105420-w1600-h1066",
      imageUrl3: "https://rimh2.domainstatic.com.au/f5VWblt6AkqwHGklWOmrGJduDTI=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018515858_4_1_230512_105420-w6000-h4000",
      imageUrl4: "https://rimh2.domainstatic.com.au/cvcBShB25c8AcDvLVs6XJsdzy58=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018515858_7_1_230512_105420-w1600-h1066",
      imageUrl5: "https://rimh2.domainstatic.com.au/SYEQbER6SDfmKmlq1TUYKsdRkHU=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018515858_9_1_230512_105420-w1600-h1066",
      price: "$600 per week",
      address: "129 Main St, City, State",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
    },
    {
      id: 4,
      imageUrl1: "https://www.thehousedesigners.com/images/plans/01/AMD/bulk/8769/1221e-front-rendering_m.webp",
      imageUrl2: "https://rimh2.domainstatic.com.au/nBjeyI-KgBrf79ObFFIjFV7NwWQ=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018499278_1_1_230426_114901-w800-h533",
      imageUrl3: "https://rimh2.domainstatic.com.au/knzBWu-FM3-MY3h8szc3R0jldQU=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018499278_4_1_230426_114901-w800-h533",
      imageUrl4: "https://rimh2.domainstatic.com.au/bMfhL0FDp1SHVFhgnRS6kqYX6hY=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018499278_9_1_230426_114901-w800-h533",
      imageUrl5: "https://rimh2.domainstatic.com.au/LHiReSnGjrGXQn4CZPadgwb-uc0=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018499278_7_1_230426_114901-w800-h533",
      price: "$700 per week",
      address: "131 Main St, City, State",
      bedrooms: 12,
      bathrooms: 1,
      parking: 1,
    },
  ];
  