const filterProducts = (catalogArr, filtersObj) => {
  return catalogArr.filter((item) => {
    const price = filtersObj.price.length ? filtersObj.price.includes(item.tags.price) : item.tags.price;
    const brand = filtersObj.brand.length ? filtersObj.brand.includes(item.tags.brand) : item.tags.brand;
    const color = filtersObj.color.length ? filtersObj.color.includes(item.tags.color) : item.tags.color;
    const os = filtersObj.os.length ? filtersObj.os.includes(item.tags.os) : item.tags.os;
    const internalMemory = filtersObj.internalMemory.length ? filtersObj.internalMemory.includes(item.tags.internalMemory) : item.tags.internalMemory;
    const ram = filtersObj.ram.length ? filtersObj.ram.includes(item.tags.ram) : item.tags.ram;
    const displaySize = filtersObj.displaySize.length ? filtersObj.displaySize.includes(item.tags.displaySize) : item.tags.displaySize;
    const displayResolution = filtersObj.displayResolution.length ? filtersObj.displayResolution.includes(item.tags.displayResolution) : item.tags.displayResolution;
    const camera = filtersObj.camera.length ? filtersObj.camera.includes(item.tags.camera) : item.tags.camera;
    const cpu = filtersObj.cpu.length ? filtersObj.displayResolution.includes(item.tags.displayResolution) : item.tags.cpu;

    return price && brand && color && os && internalMemory && ram && displaySize && displayResolution && camera && cpu;
  });
};

export default filterProducts;