const filterProducts = (catalogArr, filtersObj) => {
  return catalogArr.filter((item) => {
    const priceRange = filtersObj.priceRange.length ? filtersObj.priceRange.includes(item.tags.priceRange) : item.tags.priceRange;
    const brand = filtersObj.brand.length ? filtersObj.brand.includes(item.tags.brand) : item.tags.brand;
    const color = filtersObj.color.length ? filtersObj.color.includes(item.tags.color) : item.tags.color;
    const os = filtersObj.os.length ? filtersObj.os.includes(item.tags.os) : item.tags.os;
    const internalMemory = filtersObj.internalMemory.length ? filtersObj.internalMemory.includes(item.tags.internalMemory) : item.tags.internalMemory;
    const ram = filtersObj.ram.length ? filtersObj.ram.includes(item.tags.ram) : item.tags.ram;
    const displaySize = filtersObj.displaySize.length ? filtersObj.displaySize.includes(item.tags.displaySize) : item.tags.displaySize;
    const displayResolution = filtersObj.displayResolution.length ? filtersObj.displayResolution.includes(item.tags.displayResolution) : item.tags.displayResolution;
    const camera = filtersObj.camera.length ? filtersObj.camera.includes(item.tags.camera) : item.tags.camera;
    const cpu = filtersObj.cpu.length ? filtersObj.cpu.includes(item.tags.cpu) : item.tags.cpu;

    return priceRange && brand && color && os && internalMemory && ram && displaySize && displayResolution && camera && cpu;
  });
};

export default filterProducts;