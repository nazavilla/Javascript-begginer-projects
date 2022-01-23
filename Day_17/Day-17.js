const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
    get appetizers() {
      return this._courses.appetizers;
  },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
  },
    get mains() {
      return this._courses.mains;
  },
    set mains(mainsIn) {
      this._courses.mains = mainsIn;
  },
    get desserts() {
      return this._courses.desserts;
  }, 
    set desserts(dessertIn) {
      this._courses.appetizers = dessertIn;
  },
  get courses() {
    return {
     appetizers: this.appetizerIn,
     mains: this.mainsIn,
     desserts: this.dessertIn
		}
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

		this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = courseName;
 
    const randomIndex = Math.floor(Math.random() * dishes.length);
    console.log(dishes[randomIndex]);
    return dishes[randomIndex];
    
  },
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse(this._courses.appetizers);
    const main = this.getRandomDishFromCourse(this._courses.mains);
    const dessert = this.getRandomDishFromCourse(this._courses.desserts);
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} the price is $${totalPrice}.`;
  }
  

}
menu.addDishToCourse('appetizers', 'soup', 4.25);
menu.addDishToCourse('mains', 'lamb shank', 12.75);
menu.addDishToCourse('desserts', 'ice cream', 5);


let meal = menu.generateRandomMeal();
console.log(meal);