const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  getCarInfo: function() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
};

console.log(car.getCarInfo()); 