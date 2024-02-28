export class Product {
    _id?:number;
    id?: number;
    title: string;
    price: number;
    description: string;
    category: number;
    images: string[];
  
    constructor(
      id: number,
      title: string,
      price: number,
      description: string,
      category: number,
      images: string[]
    ) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.category = category;
      this.images = images;
    }
  }
  