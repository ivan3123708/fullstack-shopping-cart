export type filterTypes =
  'priceRange' |
  'brand' |
  'color' |
  'os' |
  'internalMemory' |
  'ram' |
  'displaySize' |
  'displayResolution' |
  'camera' |
  'cpu';

export type filterValues =
  '<250' | '250-500' | '500-750' | '750>' |
  'samsung' | 'apple' | 'huawei' | 'lg' | 'htc' |
  'black' | 'white' | 'grey' |
  'android' | 'ios' |
  '16' | '64' | '128' | '256' |
  '1' | '3' | '4' | '6' |
  '4.5' | '5.1' | '5.5' | '5.8' | '6.0' | '6.3' |
  '540x960' | '1080x1920' | '1125x2436' | '1440x2560' | '1440x2880' | '1440x2960' |
  '8' | '12' | '13' | '16' |
  'quad_core' | 'hexa_core' | 'octa_core';
  