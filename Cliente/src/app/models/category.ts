export class Category{
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  
    constructor(id: number, name: string, image: string, creationAt: Date, updatedAt: Date) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.creationAt = creationAt;
      this.updatedAt = updatedAt;
    }
  }
  