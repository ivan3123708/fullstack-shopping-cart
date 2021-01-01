db.createCollection('users');
db.createCollection('carts');

db.products.insertMany([
  {
    info: {
      name: 'Apple iPhone 8 Plus',
      dimensions: '158.4 x 78.1 x 7.5 mm',
      weight: '202 g',
      displayType: 'LED-backlit IPS LCD, capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1080 x 1920 pixels',
      os: 'iOS 11',
      cpu: 'Hexa-core (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '3 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm, OIS) + 12 MP (f/2.8, 57mm)',
      batery: 'Non-removable Li-Ion 2691 mAh battery (10.28 Wh)',
      color: 'White',
      price: 700,
      photo: '/img/apple_iphone_8_plus.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'apple',
      color: 'white',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.5',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'Apple iPhone X',
      dimensions: '143.6 x 70.9 x 7.7 mm',
      weight: '174 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1125 x 2436 pixels',
      os: 'iOS 11.1.1',
      cpu: 'Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
      internalMemory: '256 GB',
      ram: '3 GB',
      camera: 'Dual: 12 MP (f/1.8, 28mm) + 12 MP (f/2.4, 52mm)',
      batery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
      color: 'Black',
      price: 950,
      photo: '/img/apple_iphone_x.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'apple',
      color: 'black',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.8',
      displayResolution: '1125x2436',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'HTC U11',
      dimensions: '153.9 x 75.9 x 7.9 mm',
      weight: '169 g',
      displayType: 'Super LCD5 capacitive touchscreen, 16M colors',
      displaySize: '5.5"',
      displayResolution: '1440 x 2560 pixels',
      os: 'Android 7.1 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: '12 MP (f/1.7, 1.4 µm, Dual Pixel PDAF, 5-axis OIS)',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Ice White',
      price: 450,
      photo: '/img/htc_u11.jpg'
    },
    tags: {
      priceRange: '250-500',
      brand: 'htc',
      color: 'white',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '5.5',
      displayResolution: '1440x2560',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Huawei Mate 10 Pro',
      dimensions: '154.2 x 74.5 x 7.9 mm',
      weight: '178 g',
      displayType: 'AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 8.0 (Oreo)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '128 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.6, 27mm, OIS) +20 MP (f/1.6, 27mm)',
      batery: 'Non-removable Li-Po 4000 mAh battery',
      color: 'Titanium Gray',
      price: 800,
      photo: '/img/huawei_mate_10_pro.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'huawei',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '6.0',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Huawei P10',
      dimensions: '145.3 x 69.3 x 7 mm',
      weight: '145 g',
      displayType: 'IPS-NEO LCD capacitive touchscreen, 16M colors',
      displaySize: '5.1"',
      displayResolution: '1080 x 1920 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 12 MP (f/2.2, PDAF, OIS) + 20 MP',
      batery: 'Non-removable Li-Ion 3200 mAh battery',
      color: 'Mystic Silver',
      price: 680,
      photo: '/img/huawei_p10.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'huawei',
      color: 'grey',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.1',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'LG G6',
      dimensions: '148.9 x 71.9 x 7.9 mm',
      weight: '163 g',
      displayType: 'IPS LCD capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '4 GB',
      camera: 'Dual: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Ice Platinum',
      price: 800,
      photo: '/img/lg_g6.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'lg',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2880',
      camera: '13',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'LG V30',
      dimensions: '151.7 x 75.4 x 7.3 mm',
      weight: '158 g',
      displayType: 'P-OLED capacitive touchscreen, 16M colors',
      displaySize: '6.0"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.1.2 (Nougat)',
      cpu: 'Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: 'Dual: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Aurora Black',
      price: 800,
      photo: '/img/lg_v30.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'lg',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '6.0',
      displayResolution: '1440x2880',
      camera: '16',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Samsung Galaxy A3',
      dimensions: '130.1 x 65.5 x 6.9 mm',
      weight: '110.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '4.5"',
      displayResolution: '540 x 960 pixels',
      os: 'Android 4.4.4 (KitKat)',
      cpu: 'Quad-core 1.2 GHz Cortex-A53',
      internalMemory: '16 GB',
      ram: '1 GB',
      camera: '8 MP (f/2.4, 31mm), autofocus, LED flash',
      batery: 'Non-removable Li-Ion 1900 mAh battery',
      color: 'Silver',
      price: 150,
      photo: '/img/samsung_galaxy_a3.JPG'
    },
    tags: {
      priceRange: '<250',
      brand: 'samsung',
      color: 'grey',
      os: 'android',
      internalMemory: '16',
      ram: '1',
      displaySize: '4.5',
      displayResolution: '540x960',
      camera: '8',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Samsung Galaxy Note 8',
      dimensions: '162.5 x 74.8 x 8.6 mm',
      weight: '195.3 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '6.3"',
      displayResolution: '1440 x 2960 pixels',
      os: 'Android 7.1.1 (Nougat)',
      cpu: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
      internalMemory: '256 GB',
      ram: '6 GB',
      camera: 'Dual: 12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm) + 12MP (f/2.4, 52mm, 1/3.6", 1 µm)',
      batery: 'Non-removable Li-Ion 3300 mAh battery',
      color: 'Midnight Black',
      price: 800,
      photo: '/img/samsung_galaxy_note_8.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '256',
      ram: '6',
      displaySize: '6.3',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Samsung Galaxy S8',
      dimensions: '148.9 x 68.1 x 8 mm',
      weight: '155 g',
      displayType: 'Super AMOLED capacitive touchscreen, 16M colors',
      displaySize: '5.8"',
      displayResolution: '1440 x 2960 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
      internalMemory: '64 GB',
      ram: '4 GB',
      camera: '12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm, Dual Pixel PDAF), phase detection autofocus, OIS',
      batery: 'Non-removable Li-Ion 3000 mAh battery',
      color: 'Midnight Black',
      price: 720,
      photo: '/img/samsung_galaxy_s8.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  }
]);
