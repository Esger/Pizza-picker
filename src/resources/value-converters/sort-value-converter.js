export class SortValueConverter {
  toView(dataArray, config) {
    let factor = (config.direction || 'ascending') === 'ascending' ? 1 : -1;
    let factor2 = (config.direction2 || 'ascending') === 'ascending' ? 1 : -1;
    if (Array.isArray(dataArray)) {
      return dataArray.slice(0)
        .sort(function (a, b) {
          const result = (a[config.propertyName] - b[config.propertyName]) * factor;
          const result2 = (a[config.propertyName2] - b[config.propertyName2]) * factor2;
          return result || result2;
        });
    } else {
      return 'error in array'
    }
  }
}
