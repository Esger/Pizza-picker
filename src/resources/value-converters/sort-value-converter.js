export class SortValueConverter {
  toView(array, config) {
    var factor = (config.direction || 'ascending') === 'ascending' ? 1 : -1;
    var factor2 = (config.direction2 || 'ascending') === 'ascending' ? 1 : -1;
    return array
      .slice(0)
      .sort(function (a, b) {
        let result = (a[config.propertyName] - b[config.propertyName]) * factor;
        let result2 = (a[config.propertyName2] - b[config.propertyName2]) * factor2;
        return result || result2;
      });
  }
}
