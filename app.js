// apna college (Prtotypes , classes , constructor)

// prototypes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// This technique is called prototype-based inheritance in JavaScript.
// This is an object named 'employee' with a method 'calcTax'
// const employee = {
//     calcTax() {
//         console.log("Tax rate is 20%"); // This method logs the tax rate when called
//     }
// };

// // This is an object named 'haseeb' with a property 'salary'
// const haseeb = {
//     salary: 60000 // This object has a salary property set to 60000
// };

// // Here we set the prototype of 'haseeb' to 'employee'
// // This means 'haseeb' will now inherit properties and methods from 'employee'
// haseeb.__proto__ = employee;

// // Now we call the 'calcTax' method on the 'haseeb' object
// // Even though 'haseeb' does not have 'calcTax' directly, 
// // it will find and use it from the 'employee' object via the prototype chain
// console.log(haseeb.calcTax()); // Outputs: "Tax rate is 20%"


// This is an example of method "overriding in JavaScript", where an object can have a method with the same name as one inherited from its prototype, and the object's own method will be used.
// const employee = {
//     calcTax(){
//         console.log("Tax rate is 20%")
//     }
// }

// const haseeb = {
//     salary:60000,
//     calcTax(){
//         console.log("Tax rate is 70%")
//     }

// }

// haseeb.__proto__ =  employee
// console.log(haseeb.calcTax()) // Outputs: "Tax rate is 70%"


// sir Ishaq bhojani>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// class Product {
//     constructor(title,price,desc){
// this.name = title
// this.amount = price
// this.detials = desc
//     }
// }

// const product1= new Product("android",12000,"something")
// const product2= new Product("android 2",13000,"something")
// const product3= {
//     name : "something",
//     amount : "something",
//     details : "something"
// }
// // console.log(product1,product2,product3)
// console.log(product1 instanceof Product,product2 instanceof Product,product3 instanceof Product)


// Apna college
// Classes
// hamna yahan constructor nahi bnaya lkn woh automatically banjata 
// class ToyotaCar {
//    start(){
// console.log("start car")
//    }
//    stop(){
//     console.log("stop car")
//    }
//    setBrand(brand){
//     this.brand = brand  
//  }
// }


// const fortuner = new ToyotaCar() 
// const lexus = new ToyotaCar() 
// // console.log( typeof fortuner , typeof lexus) 
// // console.log( typeof fortuner.start , typeof lexus.stop)
// // console.log( typeof ToyotaCar )
// fortuner.setBrand("Fortuner 12")
// lexus.setBrand("lexus 12")
// console.log(fortuner.brand,lexus.brand)
// fortuner.start()
// lexus.start()

// constructor

// class ToyotaCar {
//     constructor(brand,price){
//         console.log("creating new object")
//      this.brand = brand  
//      this.price = price

//     }
//     start(){
//  console.log("start car")
//     }
//     stop(){
//      console.log("stop car")
//     }
// //     setBrand(brand){
// //      this.brand = brand  
// //   }
//  }
 
 
//  const fortuner = new ToyotaCar("fortuner 3" , "20000") 
//  console.log(fortuner)
//  const lexus = new ToyotaCar("lexus 7" , "30000" ) 
//  console.log(lexus)



 












// // For understanding classes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // if we dont use class
// // Creating the ToyotaCar object with a nested lexus object
// const ToyotaCar = {
//     // fortuner object with its own methods
//     fortuner: {
//        brand: "Fortuner 12",
 
//        // Method to start the car
//        start: function() {
//           console.log("start car");
//        },
 
//        // Method to stop the car
//        stop: function() {
//           console.log("stop car");
//        },
 
//        // Method to set the brand of the car
//        setBrand: function(brand) {
//           this.brand = brand;
//        }
//     },
 
//     // lexus object with its own methods
//     lexus: {
//        brand: "Lexus 12",
 
//        // Method to start the car
//        start: function() {
//           console.log("start car");
//        },
 
//        // Method to stop the car
//        stop: function() {
//           console.log("stop car");
//        },
 
//        // Method to set the brand of the car
//        setBrand: function(brand) {
//           this.brand = brand;
//        }
//     }
//  };
 
//  // Set brand for lexus and fortuner objects inside ToyotaCar
//  ToyotaCar.fortuner.setBrand("Fortuner 12");
//  ToyotaCar.lexus.setBrand("Lexus 12");
 
//  // Log the brand for both cars
//  console.log(ToyotaCar.fortuner.brand, ToyotaCar.lexus.brand);  // Outputs: Fortuner 12 Lexus 12
 
//  // Call the start method for both cars
//  ToyotaCar.fortuner.start();  // Outputs: start car
//  ToyotaCar.lexus.start();     // Outputs: start car



// //  if we use class

// // Define the ToyotaCar class
// class ToyotaCar {
//     constructor(brand) {
//        this.brand = brand;  // Set the brand for the car instance
//     }
 
//     // Method to start the car
//     start() {
//        console.log("start car");
//     }
 
//     // Method to stop the car
//     stop() {
//        console.log("stop car");
//     }
 
//     // Method to set the brand of the car
//     setBrand(brand) {
//        this.brand = brand;
//     }
//  }
 
//  // Create instances of ToyotaCar for fortuner and lexus
//  const fortuner = new ToyotaCar("Fortuner 12");
//  const lexus = new ToyotaCar("Lexus 12");
 
//  // Log the brand for both instances
//  console.log(fortuner.brand, lexus.brand);  // Outputs: Fortuner 12 Lexus 12
 
//  // Call the start method for both instances
//  fortuner.start();  // Outputs: start car
//  lexus.start();     // Outputs: start car


