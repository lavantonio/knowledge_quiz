class Category{
  constructor(category){
    this.category = category;
  }
  getCategory(){
    return this.category
  }
}

const categories = [
  new Category (`Geografija`),
  new Category (`Istorija`),
  new Category (`Matematika`),
  new Category (`Opste obrazovanje`)
];
