export class Car {

  manufacturer: string;
  model: string;
  price: number;

  constructor(data: any) {
    this.manufacturer = data.manufacturer || '';
    this.model = data.model || '';
    this.price = data.price || 0;
  }

}
