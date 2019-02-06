export interface IFilters {
  filters: {
    priceRange: string[];
    brand: string[];
    color: string[];
    os: string[];
    internalMemory: string[];
    ram: string[];
    displaySize: string[];
    displayResolution: string[];
    camera: string[];
    cpu: string[];
  }
  checked: string[];
}
