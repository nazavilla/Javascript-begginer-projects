let andres = {
    name: "andres",
    age : 10,
    aprovedCourses: [
        "html"
    ],
     //creating a method, push a new course
    aprovarcourses(newcurse){
    this.aprovedCourses.push(newcurse);
   }
};
//create a prototype

function user(name, age, aprovedCourses){
        this.name = name;
        this.age = age;
        this.aprovedCourses = aprovedCourses;

    };
    //new way to create a method and push a new course
    //fijate que esta fuera de la funcion
    user.prototype.aprovarcourses = function(newCourse){
    this.aprovedCourses.push(newCourse);
    };

    //instancia de un prototypo
    const daniel = new user(
        "daniel emilio",
        "12",
        ["drones"]
    );