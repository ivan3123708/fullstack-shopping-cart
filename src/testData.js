const catalog = [
  {
    id: 1,
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
      price: '$150.00',
      photo: './img/samsung_galaxy_a3.JPG'
    },
    tags: {
      price: '150',
      brand: 'samsung',
      color: 'grey',
      os: 'android',
      internalMemory: '16',
      ram: '1',
      displaySize: '4.5',
      displayResolution: '540x960',
      camera: '8',
      cpu: 'quad core'
    }
  },
  {
    id: 2,
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
      color: 'Silver',
      price: '$950.00',
      photo: './img/apple_iphone_x.jpg'
    },
    tags: {
      price: '950',
      brand: 'apple',
      color: 'grey',
      os: 'ios',
      internalMemory: '256',
      ram: '3',
      displaySize: '5.8',
      displayResolution: '1125x2436',
      camera: '12',
      cpu: 'hexa core'
    }
  },
  {
    id: 3,
    info: {
      name: 'LG G6',
      dimensions: '148.9 x 71.9 x 7.9 mm',
      weight: '163 g',
      displayType: 'IPS LCD capacitive touchscreen, 16M colors',
      displaySize: '5.7"',
      displayResolution: '1440 x 2880 pixels',
      os: 'Android 7.0 (Nougat)',
      cpu: 'Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)',
      internalMemory: '128 GB',
      ram: '4 GB',
      camera: 'Dual: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, no AF)',
      batery: 'Non-removable Li-Po 3300 mAh battery',
      color: 'Silver',
      price: '$800.00',
      photo: './img/lg_g6.jpg'
    },
    tags: {
      price: '800',
      brand: 'lg',
      color: 'grey',
      os: 'android',
      internalMemory: '128',
      ram: '4',
      displaySize: '5.7',
      displayResolution: '1440x2880',
      camera: '13',
      cpu: 'quad core'
    }
  }
];

export default catalog;