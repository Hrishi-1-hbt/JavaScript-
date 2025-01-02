// let username;
// document.getElementById("mysubmit").onclick = function () {
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent =`Hello,${username}`
//     console.log(username);
// };

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;
// console.log(age,typeof age);

//MATH
// console.log(Math.PI);
// let x=23.34353

//z= Math.floor(x);  23
//z= Math.ceil(x);  24
//z= Math.trunc(x);  23
//z= Math.pow(x,2);   544.03
//z= Math.sqrt(x);     4.83
//z= Math.log(x);   3.15

//z= Math.sin(45);  0.85
//z= Math.cos(45);     0.52
//z= Math.tan(45);   1.60

//z= Math.abs(-3.45);   3.45
// z= Math.sign(-1);

// console.log(z);


//RANDOM NUMBER GENERATOR
// const min =50;
// const max = 100;

// let randomNumber = Math.floor(Math.random()*(max-min))+ min;

// console.log(randomNumber);




//IF STATEMENT
// let age = 12;
// if(age>=18){
//     console.log("YOu are eligible to vote");
// }else{
//     console.log("YOu are Not Eligible")
// }



//CHECKED PROPERTY

// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const mastercard = document.getElementById("mastercard");
// const paypalbtn = document.getElementById("paypalbtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function(){
//     if(mycheckbox.checked){
//         subResult.textContent =`YOu Are Subscribed!`; 
//     }else{
//         subResult.textContent =`YOu Are  Not Subscribed!`;
//     } 
//     if(visabtn.checked){
//         paymentResult.textContent =`You are paying With VISA`;

//     }else if(mastercard.checked){
//         paymentResult.textContent =`You are paying With MasterCard`;

//     }else if(paypalbtn.checked){
//         paymentResult.textContent =`You are paying With PayPal`;
//     }else{
//         paymentResult.textContent =`You muat select a payment Type`;

//     }  
//  }



//TERNARY OPERATOR
// let age=21;
// console.log(age >=18 ?"You are an adult" :"you are a minor");



//SWITCH - CAN BE REPLACEMNT  TO MANY ELSE IF STATEMENT

// let day =17

// switch (day) {
//     case 1:
//         console.log("it is Monday")
        
//         break;
//     case 2:
//         console.log("it is tuesday")
            
//         break;

//     case  3:
//         console.log("it is Wednesday")
                
//         break;
//     case  4:
//         console.log("it is Thursaday")
                    
//         break;
//     case  5:
//         console.log("it is Friday")
                    
//             break;

//     case  6:
//         console.log("it is saturady")
                
//         break;

//     case  7:
//         console.log("it is Sunday")
                
//         break;

//     default:
//         console.log(`${day} is Not a Day`)
//         break;
// }




//STRING METHOD  - it allow to  the manuplate the and work with text(String)

// let username ='    Hrishi     ';
// let Phonenumber = '123-345-456'
// let Birthday = '28-11-2002';

// console.log(username.charAt(0));

// console.log(username.lastIndexOf("i"))

// //username = username.trim();  // trim is removing the  all spaces in the data it 
// console.log(username.length)
// console.log(username.toUpperCase());
// console.log(username.startsWith(" ") ?"Yes, your your name is start with space ":"your your name is NOt start with space")
// console.log(Phonenumber.replaceAll("-"," "))
// console.log(Birthday.replaceAll("-","/"))
// console.log(Phonenumber.padEnd(15,"0"))


//string Slicing In javascript - creating a substring from a portion of another string 

// const fullname = "Hrishi Tingani"
// console.log(fullname.slice(0,6));
// console.log(fullname.slice(7,14));
// console.log(fullname.slice(0,fullname.indexOf(" ")));



//METHOD CHAINING IN  JAVASCRIPT  -  calling one method after another is one continuos line of code


//NO METHOD CHAINING
//et username = window.prompt("Enter Your Username");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();
//  let Username  = letter+extraChars;
// console.log(Username)


///  METHOD CHAINING
// username = username.trim().charAt(0).toUpperCase(0) + username.trim().slice(1).toLowerCase();

// console.log(username);


////  = Assignment operator
//// == comparison operator(compare if values are equal)
////  === striclty equality operator (compare if values  & data type are equal)
////  != inequality operator 
//// !== striclty inequality operator


// === striclty equality operator (compare if values  & data type are equal)

// const PI = 3.14;
// if( PI === "3.14"){
//     console.log("That  is PI");// if using comparision operator its true
// }else{
//     console.log("That  is Not PI");// if using strictly equality operator it is not equal bcz PI is NUmber daa type and "3.14" is string 
// }


// let username  = "";
// do{
//     username = window.prompt("Enter The your name");
// }while (username === ""  ) ;
// console.log(`Hello..!, ${username}`);


//FUNCTION -  A section of recursion code.
///           declare code once it whenever you want 
 //             call the function to encarrect that code

//  function happyBirthday(username,age){
//     console.log("Happt Birthday To You!");
//     console.log("Happt Birthday To You!");
//     console.log(`Happt Birthday dear ${username}`);
//     console.log("Happt Birthday To You!");
//     console.log(`You are  ${age}  year Old`);
//  }
//  happyBirthday("Hrishi", 23)
//  console.log(" ");
//  happyBirthday("Gaju", 24)
//  console.log(" ");
//  happyBirthday("Manoj", 23)
//  console.log(" ");

// -------------------------------------------------------------
// ARRAY - a variable like structure that can hold  more 
//         than a value

// let fruit = ["apple","orange","Banana","coconut"];
// fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit);
// }

//   --------------------------------------------------------------------------------
// SPREAD   -   ... it allows an iterable such aas an 
//                 array  or string  to be expand into
//                 seperate element (unpacks the element)


        // let username = " Hrishi";
        // let lastname = " Hrishi";
        // let letter = [...username];
        // console.log(letter) //['H','r','i','s','H','i',]

        // let letter = [...username].join("-");
        // console.log(letter) //[H-r-i-s-H-i]

        // let letter = [...username ....lastname].join("-");
        // console.log(letter) //[H-r-i-s-H-i-H-r-i-s-H-i]

//   ---------------------------------------------------------------------------------

// REST PARAMETER -  (...rest) allows to a features work with variable 
//                     Number of arguments by bonding  them into an ARRAY

//                     SPREAD = expand an array seperate element 
//                     rest =  bundles seperate  elementinto an array

    // function openFridge(...foods){
    //     console.log(foods);
    // }
    // function getFood(...foods){
    //     return foods;

    // }

    // const food1 = "pizza";
    // const food2 = "hamburgur";
    // const food3 = "hotdog";
    // const food4 = "sushi";


    // // openFridge(food1,food2,food3,food4);
    // const foods = getFood(food1,food2,food3,food4);
    // console.log(foods);

//--------------------------------------------------------------------------------------
// CALLBACK - a function that is passed as an arguments to
//            another function

//            used to handle asynchronous   operations:
//            1.  Reading a files
//            2. Network request
//            3. Interacting with databased

// function hello(){
//        setTimeout(() => {
//         console.log('hello');
//        }, 3000);

// }
// function goodBye(){
//         console.log("GoodBye")
// }           
// hello(goodBye())

//------------------------------------------------------------------------------------------------

// FOREACH() =  method  used to iterate over the elements of an array and apply a specified function (callback)
//              to each element 

//              array.forEach(callback)

// let number = [1,2,3,4,5];



// number.forEach(double);
// number.forEach(display);

// function double(element, index , array ){
// array[index] = element * 2 ;
// }

// function triple(element, index , array ){
//         array[index] = element * 3 ;
//  }



// function display(element){
//         console.log(element)
// }

 //---------------------------------------------------------------------------------------------------------------------
 
//  .map() = accept a callback  and applies that function 
//  to each element of an array , then return a new array

// const number =[1,2,3,4,5];

// const squareNumber = number.map(square);
// const cubeNumber = number.map(cube);
// console.log(squareNumber);
// console.log(cubeNumber);

// function square(element){
//         return Math.pow(element, 2)
// }

// function cube(element){
//         return Math.pow(element, 3)
// }

//-----------------------------------------------------------------------------------------------------------------------------

// .filter() - create a new array by filtering out element

// let numbers = [1,2,3,4,5,6,7,8];
// let evenNumber = numbers.filter(isEven);
// let oddNumber = numbers.filter(isOdd);

// console.log(evenNumber);
// console.log(oddNumber);

// function isEven(element){
//         return element % 2 === 0 ;
// }

// function isOdd(element){
//         return element % 2 !== 0 ;
// }


//----------------------------------------------------------------------------------------------------------

// .reduce =  reduce the elements of an array to a a single value

// const price = [5,30 , 10 ,25, 15 ,20];

// const total = price.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator , element){
//         return accumulator + element;
// }
 

//-------------------------------------------------------------------------------------------------------------

// function declaration  = define  a reusable block of code  that
//                         performs a specific task

                // function hello(){
                //         console.log("hello");

                // }

// function expression  = a way to define function as values 
//                         or variables

        // 1. callback in asynchronous operations
        // 2. Higher- Functions
        // 3. closures
        // 4. Event Listeners

// const hello = function(){
//         console.log("hello");
// }
                        
//----------------------------------------------------------------------------------------------------------------------


  //arrow function  = a condition tio write expresion
                //      w
        
// const hello = ()=>console.log("hello");
// hello();


//---------------------------------------------------------------------------------------------------

//  OBJECT - A collection of related properties and/or methods
//          can represent real world object (people , product, places)
//          object - { key : value, function()}


                // const person1 = {
                //         firstname : "John",
                //         lastname  : "doe",
                //         age  : 30,
                //         isEmployed : true,
                //         sayHello: function(){console.log("Hi i am John")},
                //         sayBye: function(){console.log("Good Bye!")}
                // };
                // const person2 = {
                //         firstname : "patrick",
                //         lastname : "star",
                //         age  :42,
                //         isEmployed : false,
                //         sayHello: function(){console.log("Hi i am patrick")},
                //         sayBye: function(){console.log("Bye....!")}
                // };

                // console.log(person1.firstname);
                // console.log(person1.lastname);
                // console.log(person1.isEmployed);
                // console.log(person1.sayBye());
                // console.log(person1.sayHello());
                // console.log(" ");
                // console.log(person2.firstname);
                // console.log(person2.lastname);
                // console.log(person2.isEmployed);
                // console.log(person2.sayBye());
                // console.log(person2.sayHello());
                                
 //--------------------------------------------------------------------------------------------------------------------------------
// this -  reference to the object  where THIS is used ( the object depends)
//         on object depends on the imedeiate contex)
//         person.name = this
                    
                // const person1 = {
                //                 firstname : "John",
                //                 lastname  : "doe",
                //                 age  : 30,
                //                 isEmployed : true,
                //                 sayHello: function(){console.log(`Hi i am ${this}, ${this.lastname}` )},
                //                 sayBye: function(){console.log("Good Bye!")}
                //         };
                // console.log(person1.sayHello());
                        

//------------------------------------------------------------------------------------------------------------------------------------

//constructor - special method for defining the 
//               properties and method of objects


                // function Car(make, model, year ,color){
                //         this.make = make ,
                //         this.model = model ,
                //         this.year = year ,
                //         this.color = color 
                        
                // }

                // const car1 = new Car("ford","mustang",2024, 'red');

                // console.log(car1.make);
                // console.log(car1.model);
                // console.log(car1.year);
                // console.log(car1.color);

//---------------------------------------------------------------------------------------------------------------------

//  CLASS - (ES6 featue ) provides a structured  and cleaver way to 
//            work with objects compared to traditional constructor function
//            ex = static keywords, encapsulations, inheritance


                // class  product {
                //         constructor(name, price) {
                //                 this.name = name;
                //                 this.price = price;      
                //         }

                //         displayProduct(){
                //                 console.log(`Product :${this.name}`);
                //                 console.log(`Price:₹ ${this.price} `)
                //         }
                // }

                // const product1 = new product('Tshirt',500);
                // const product2 = new product('Shirt',600);
                // const product3 = new product('Shorts',200);
                // const product4 = new product('pen',600);

                // product1.displayProduct();
                // product2.displayProduct();
                // product3.displayProduct();
                // product4.displayProduct();

//-------------------------------------------------------------------------------------------------------------------------------

// static - keyword taht defines properties or methods that belongs
//          to a class itself rather than the objects created
//          from that class ( class owns anything  static, not the objects)


                // class MathUtil{
                //         static PI = 3.14159;

                //         static getDiameter(radius){
                //                 return radius *2 ;

                //         }
                //         static getCircumference(radius){
                //                 return 2 * this.PI * radius;

                //         }
                //         static getArea(radius){
                //                 return  this.PI * radius  * radius ;
                                
                //         }
                // }

                // console.log(MathUtil.PI);
                // console.log(MathUtil.getDiameter(10));
                // console.log(MathUtil.getCircumference(10));
                // console.log(MathUtil.getArea(10));

//-------------------------------------------------------------------------------------------------------------------------------
// INHERITANCE -   allows a new class to inherit properties and methods from and
//                 existing class (parent  -> child) helps with code reusability


                // class Animal{
                //         alive =true
                //         eat(){
                //                 console.log(`This ${this.name} is eating`);
                //         }
                //         sleep(){
                //                 console.log(`This ${this.name} is sleeping`);
                //         }

                // }
                //         class Rabbit extends Animal{
                //                 name = 'rabbit';
                //         }
                //         class Fish extends Animal{
                //                 name = 'Fish';
                //         }
                //         class Horse extends Animal{
                //                 name = 'Horse';
                // }
                
                // const rabbit = new Rabbit();
                // const fish = new Fish();
                // const horse = new Horse();
                

                // console.log(rabbit.alive);
                // rabbit.eat()
                // rabbit.sleep()
                // fish.eat()
                // fish.sleep()
                // horse.eat()
                // horse.sleep()

//---------------------------------------------------------------------------------------------------------------------------

// super  -  keyword is used in classses to call the constructor  or acces
//           the properties and methods of a parent (superclass)
//           this = this object
//           super = this parent


//                 class Animal{
//                         constructor(name, age){
//                                 this.name = name;
//                                 this.age = age;

//                         }

//                 }
//                         class Rabbit extends Animal{
//                                constructor(name, age , runSpeed){
//                                 super(name,age);
//                                 this.runSpeed = runSpeed;
//                                }
//                         }
//                         class Fish extends Animal{
//                                 constructor(name, age , swimSpeed){
//                                         super(name,age);
//                                         this.swimSpeed = swimSpeed;
//                                        }
//                                 }
                        
//                         class Horse extends Animal{
//                                 constructor(name, age , runSpeed){
//                                         super(name,age);
//                                         this.runSpeed = runSpeed;
//                                        }
//                 }
                
//                 const rabbit = new Rabbit("rabit", 1, 25);
//                 const fish = new Fish("fish",3,12);
//                 const horse = new Horse("horse",6,100);


               
//                 console.log(rabbit.name); 
//                 console.log(rabbit.age);
//                 console.log(rabbit.runSpeed);
//                 console.log(fish.name); 
//                 console.log(fish.age);
//                 console.log(fish.swimSpeed);
//                 console.log(horse.name); 
//                 console.log(horse.age);
//                 console.log(horse.runSpeed);
//-----------------------------------------------------------------------------------------------------------------------------------------
// GETTER - special meethod that makes property readable
// SETTER - special method that makes  a property writable

// validate and modify a value when reading/ writing a PROPERTY

                // class Recangle {
                //         constructor(width,height){
                //                 this.width = width ;
                //                 this.height = height;
                //         }
                //         set width(newWidth){
                //                 if(newWidth > 0){
                //                         this._width = newWidth;
                //                 }else{
                //                         console.log("width must be positive number");
                //                 }
                //         }
                //         set height(newheight){
                //                 if(newheight > 0){
                //                         this._height = newheight;
                //                 }else{
                //                         console.log("height must be positive number");
                //                 }
                //         }
                //         get width(){
                //                 return this._width;
                //         }
                //         get height(){
                //                 return this._height;
                //         }
                // }
                // const rectangle = new Recangle(3,4);
                // rectangle.width =-5;
                // rectangle.height =-6;

                // console.log(rectangle.width);
                // console.log(rectangle.height);
//------------------------------------------------------------------------------------------------------------------------------------------------------
// destructing - extract values fro arrays and objects ,
//               then assign them to variable in a convinient way
//               [] - to perform array destructing 
//               {} - to performing object destructing
//               5 example

// --------example -1----------------
// SWAP THE VALUE OF TW0 variable

                // let a= 1;
                // let b = 2;

                // [a,b]= [b,a];
                // console.log(a);
                // console.log(b);

// --------example -2----------------
// SWAP THE 2 ELEMENT   IN  ARRAY  

                // const colors = ["red","green ","blue","black","white"];
                // [colors[0],colors[4]] =[colors[4],colors[0]]

                // console.log(colors);

// --------example -3----------------
//ASSIGN ARRAY TO VARIABLE

                // const colors = ["red","green ","blue","black","white"];
                // const [firstColor,secondColor,thirdColor,...extraColors]= colors;

                // console.log(firstColor);
                // console.log(secondColor);
                // console.log(thirdColor);
                // console.log(extraColors);

// --------example -4----------------
//EXTRACT VALUES FROM OBJECTS

                // const person1 = {
                //         firstname : 'spongbob',
                //         lastname : 'SquarePants',
                //         age : 30,
                //         job :"FryCook"
                // }
                // const person2 = {
                //         firstname : 'PATRICK',
                //         lastname : 'star',
                //         age : 34,
                        
                // }
                // const {firstname,lastname,age,job="UnEmployee"} = person2;

                // console.log(firstname);
                // console.log(lastname);
                // console.log(age);
                // console.log(job);

// --------example -5----------------
//DISTRUCTING IN FUNTION PARAMETERS

                // function displayPesrson({firstname,lastname,age,job="UnEmployee"}){
                //         console.log(`name : ${firstname} ${lastname} `);
                //         console.log(`age : ${age} `);
                //          console.log(`Job : ${job} `);
                // }
                //         const person1 = {
                //                 firstname : 'spongbob',
                //                 lastname : 'SquarePants',
                //                 age : 30,
                //                 job :"FryCook"
                //         }
                //         const person2 = {
                //                 firstname : 'PATRICK',
                //                 lastname : 'star',
                //                 age : 34,
                                
                //         }
                //         displayPesrson(person1)
                //         console.log(" ")
                // displayPesrson(person2)
//-----------------------------------------------------------------------------------------------------------------------------------------

// Nested Objects - Objects  inside of other objects,
//                 allows you torepresent more complex data structure
//                 child objects is enclosed by parent objects

                // person{Address{}, ContactInfo{}}
                // shoppingcart { keyBoard{},Monitor{}}

                        // const person = {    
                        // fullname: 'spongbob  SquarePants',
                        // age : 30,
                        // isStudent : true,
                        // hobies :["ryCook","jellyfishing","cooking"],
                        // Address: {
                        //         street:'124 conch st.',
                        //         city : "Bikini Bottom",
                        //         country : "Int. water"
                        // }
                        // }
                        // console.log(person.fullname);
                        // console.log(person.age);
                        // console.log(person.isStuden);
                        // console.log(person.hobies[0]);
                        // console.log(person.hobies[1]);
                        // console.log(person.hobies[2]);
                        // console.log(person.Address.street)
                        // console.log(person.Address.city)
                        // console.log(person.Address.country)

                        // for(const property in person.Address){
                        //         console.log(person.Address[property])
                        // }
              //  ---------------------------------------------------------------------------

                //         class person {
                //                 constructor(name, age , ...address){
                //                         this.name = name;
                //                         this.age = age;
                //                         this.address = new Address(...address);
                //                 }
                //         }

                //         class Address{
                //                 constructor(street, city , country){
                //                         this.street = street;
                //                         this.city = city;
                //                         this.country = country;
                //                 }
                //         }
                //         const person1 = new person("spongbob",30,"'124 conch st.",
                //                                                         "Bikini Bottom",
                //                                                         "Int. water") ;
                // console.log(person1.name);
                // console.log(person1.age);
                // console.log(person1.address.street)
                // console.log(person1.address.city)
                // console.log(person1.address.country)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// SORT -  method used to sort element of an array in places.
//         sort element as string in lexicographic order , not alphabetical
//         lexicographic - ( alphabetical+Number + symbols) as String


//   let fruits = ["apple","banana","mango","cherry"];
//   fruits.sort();
//   console.log(fruits)


// let Number =[1,2,5,7,3,4,200,8,9,10,100,];
// Number.sort((a,b)=>a-b);
// console.log(Number)

// let  people = [{name:"amana", age:23, gpa:8.9},

//                 {name:"subhash", age:26, gpa:6.9},
//                 {name:"ramaan" ,age:22, gpa:8.5},
//                 {name:"levish" ,age:25, gpa:8.2}]

//                 people.sort((a, b) => a.name.localeCompare(b.name));
//                 console.log(people)


//---------------------------------------------------------------------------------------------------------------------------------------

// DATE - objects contain the value that represent dates and times these 
        //   date objects can be changed and formatted

                // const date = new Date();

                // const year = date.getFullYear();
                // const month = date.getMonth();
                // const day = date.getDate();
                // const hour = date.getHours();
                // const minute = date.getMinutes();
                // const second = date.getSeconds();

                // console.log(year)
                // console.log(month)
                // console.log(day)
                // console.log(hour)
                // console.log(minute)
                // console.log(second)


//-------------------------------------------------------------------------------------------------------------------------------------------------
// CLOSURE - a function defined inside of another functions,
//           the inner function has access to the variable 
//           and scope of the outer function 
//           allows for privates variable and state maintaince
//           used frequently in js framework "React, vue , angular";


                // function outer (){
                //         let message ="hello";
                //         function inner(){
                //                 console.log(message);
                //         }
                //         inner();
                // }

                // message = "Good Bye"
                // outer();

//--------------------------------------------------------------------------------------------------------------------------------------
// SETTIMEOUT() - function in javascript that alloes you to shedule
//                the execution of a function after an amount of time(milliseconds)
//                Times are approximate (varius on the workload of javascript runtime env.)

//                setTimeout(callback,delay);

// function sayHello(){
//         window.alert("Hello")
// }
// setTimeout(sayHello,3000);

// setTimeout(()=>{
//         window.alert("hello")
// },3000);
// clearTimeout(timeoutId);

//--------------------------------------------------------------------------------------------------------------------------------------


// ES6 - An external file that contains reusable code that
//         can be imported into other javascript files.
//         write reusability code for many different apps.
//         can contains variable, classes , functions ,... and more
//         Introduction as part of ECMAScript 2015 update

        // IMPORT MathUtil.JS 
                        
                // import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

                // console.log(PI);
                // const Circumference = getCircumference(10);
                // console.log(`${Circumference.toFixed()}cm`);
                // const Area = getArea(10);
                // console.log(`${Area.toFixed()} cm^2`);
                // const Volume = getVolume(10);
                // console.log(`${Volume.toFixed()} cm^3`);

//-----------------------------------------------------------------------------------------------------------------------------------------------

// SYNCHRONOUS =  Execution line by consecutively in a sequencial manner
//                 code that waits for an operation to complete

// ASYNCHRONOUS - Allows multiple operation to be performed concurently wthout
//                Doesn't block the execution flow and allows the program to complete
//                (I/O operation , netework  request , fecting data )
//                handle with : callback , promises , asynch?await


                // function fun1(callback){
                // setTimeout (() => {console.log('Task 1')
                //         callback()},3000);
                // }
                // function fun2(){
                // console.log('Task 2');
                // console.log('Task 3');
                // console.log('Task 4');

                // }
                // fun1(fun2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------


//  ERROR - An object that is created to represent a problem that occurs
//         often with user input or establishing a connection

// try{ } = Enclose code that might potensionality  causse an error
// catch { }= catch handle any thrown Errors from try {}
// finally { }= (optional ) Always executes, Used mostly for clean up
                // ex.close  files, close connections , release reaourse
     
                        // try {
                        //         console.log("hello");
                        //         //NETWORK ERRORS
                        //         //PROMISE REJECTION
                        //         //SECURITY ERRORS
                                
                        // } catch (error) {
                        //         console.error(error);
                                
                        // }
                        // finally{
                        //         //close files, 
                        //         // close connections , 
                        //         // release reaourse
                        //         console.log("Finally block Executess")

                        // }
//------------------------------------------------------------------------------------------------------------------------------------

// DOM -  DOCCUMENT OBJECT MODEL
//        object{} that represent the page you see in the browser 
//        and provides you with API to interact with it.
//        and provides constructs the DOM when  it loads an HTML DOCCUMENT
//        and structure all the element in tree-like representation .
//        javascript can the DOM to dynamically
//        change the content , structure , and style of a web page.

       //Image : DOM tree.png

                        // document.title ="my website";
                        // document.body.style.backgroundColor = "black";

                        // const userName = " John";
                        // const welcomeMsg = document.getElementById("welcome");

                        // welcomeMsg.textContent += userName ===""?`  guest`: userName;

                        // console.log(document);

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// ELEMENT SELECTOR -  methods used to target and manipulate HTML elements they 
//                     allows you to select one or multiple HTML elements from the
//                     DOM (Doccument object Model)

// 1. document.getElementById()            //ELEMENT OR NULL
// 2. document.getElementsByClassName()     //HTML COLLECTION
// 3. document.getElementsByTagName()       //HTML COLLECTION
// 4. document.querySelector()             // ELEMENT OR NULL
// 5. document.querySelectorAll()         // NODELIST


// 1. document.getElementById() 
                // const myHeadding = document.getElementById("myHeadding");
                // myHeadding.style.backgroundColor ="yellow";
                // myHeadding.style.textAlign = "center";


// 2. document.getElementsByClassName()  

                // const fruits = document.getElementsByClassName("fruits");
                // console.log(fruits)

        // 1.       // fruits[0].style.backgroundColor="red";
                // fruits[1].style.backgroundColor="orange";
                // fruits[2].style.backgroundColor="yellow";
        
        //2.        // for(let fruit of fruits){
                //         fruit.style.backgroundColor="yellow";
                // }

        //3.        // Array.from(fruits).forEach(fruit =>{
                //         fruit.style.backgroundColor="yellow";
                // })

                // console.log(myHeadding);

// 3. document.getElementByTagName() 

                // const h4Element = document.getElementsByTagName("h4");
                // const liElement = document.getElementsByTagName("li");
                // console.log(h4Element)

                //1.            // h4Element[0].style.backgroundColor="yellow";
                                // h4Element[1].style.backgroundColor="red";

                        
               //2.              // for(let h4element of h4Element){
                                //         h4element.style.backgroundColor="yellow";
                                // }

                                // for(let lielement of liElement){
                                //         lielement.style.backgroundColor="lightgreen";
                                // }
                                        
                        
                //3.            //     Array.from(h4Element).forEach(h4element =>{
                                //         h4element.style.backgroundColor="yellow";
                                //     });

                                //     Array.from(liElement).forEach(lielement =>{
                                //         lielement.style.backgroundColor="lightgreen";
                                //     })


// 4. document.querySelector()   

                // const element1 = document.querySelector(".fruits") 
                // element1.style.backgroundColor="yellow";

                // const element2 = document.querySelector("h4") 
                // element2.style.backgroundColor="lightgreen";

                // const element3 = document.querySelector("li") 
                // element3.style.backgroundColor="lightblue";

                // const element4 = document.querySelector("ul") 
                // element4.style.backgroundColor="lightblue";

                // const element5 = document.querySelector("h1") 
                // element5.style.backgroundColor="red";


// document.querySelectorAll() 

        // const element1 = document.querySelectorAll(".fruits") 
        // element1[0].style.backgroundColor="yellow";
        // element1[1].style.backgroundColor="lightgreen";
        // element1[2].style.backgroundColor="red";

        // const element2 = document.querySelectorAll("li") 
        // element2[0].style.backgroundColor="yellow";
        // element2[1].style.backgroundColor="lightgreen";
        // element2[2].style.backgroundColor="red";

        // const element3 = document.querySelectorAll("ul") 
        // element3[0].style.backgroundColor="yellow";
        // element3[1].style.backgroundColor="lightgreen";

//----------------------------------------------------------------------------------------------------------------------------------

// DOM navigation - The process of navigating through the structure 
//                  of an HTML document Using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .childeren


// 1.---------.firstElementChild-------------

    //1.        // const element = document.getElementById("fruits");
                // const firstChild = element.firstElementChild;
                 // firstChild.style.backgroundColor="yellow";

                // const element2 = document.getElementById("deserts");
                // const firstChild2 = element2.firstElementChild;
                // firstChild2.style.backgroundColor="lightgreen";

                // const element3 = document.getElementById("vegitables");
                // const firstChild3 = element3.firstElementChild;
                // firstChild3.style.backgroundColor="red";
     //2.

                // const Ulelement = document.querySelectorAll("ul");

                // Ulelement.forEach(UlElement =>{
                //         const firstChild = UlElement.firstElementChild;
                //         firstChild.style.backgroundColor="yellow";
                // })

 // 2.--------------------.lastElementChild--------------------------------------------       

                // const element = document.getElementById("fruits");
                // const firstChild = element.lastElementChild;
                //  firstChild.style.backgroundColor="yellow";

                // const element2 = document.getElementById("deserts");
                // const firstChild2 = element2.lastElementChild;
                // firstChild2.style.backgroundColor="lightgreen";

                // const element3 = document.getElementById("vegitables");
                // const firstChild3 = element3.lastElementChild;
                // firstChild3.style.backgroundColor="red";



                // const Ulelement = document.querySelectorAll("ul");

                // Ulelement.forEach(UlElement =>{
                //         const firstChild = UlElement.lastElementChild;
                //         firstChild.style.backgroundColor="yellow";
                // })


//3.----------------------- .nextElementSibling-----------------------------------------------------------


                // const element = document.getElementById("Apple");
                // const firstChild = element.nextElementSibling;
                //  firstChild.style.backgroundColor="yellow";

                // const element2 = document.getElementById("fruits");
                // const firstChild2 = element2.nextElementSibling;
                // firstChild2.style.backgroundColor="lightgreen";

                // const element3 = document.getElementById("cake");
                // const firstChild3 = element3.nextElementSibling;
                // firstChild3.style.backgroundColor="red";

//4----------------------- .previousElementSibling ----------------------------------------

                // const element = document.getElementById("Orange");
                // const firstChild = element.previousElementSibling;
                //  firstChild.style.backgroundColor="yellow";

                // const element2 = document.getElementById("vegitables");
                // const firstChild2 = element2.previousElementSibling;
                // firstChild2.style.backgroundColor="lightgreen";

                // const element3 = document.getElementById("pie");
                // const firstChild3 = element3.previousElementSibling;
                // firstChild3.style.backgroundColor="red";

//4.---------------------------- .parentElement------------------------------------------------------------------
                
                // const element = document.getElementById("Orange");
                // const parent = element.parentElement;
                // parent.style.backgroundColor="yellow";

                // const element2 = document.getElementById("Onions");
                // const parent2 = element2.parentElement;
                // parent2.style.backgroundColor="lightgreen";

                // const element3 = document.getElementById("pie");
                // const parent3 = element3.parentElement;
                // parent3.style.backgroundColor="red";

//5.-------------------------------- .children---------------------------------------------

                // const element = document.getElementById("fruits");
                // const children = element.children;

                // Array.from(children).forEach(child =>{
                //         child.style.backgroundColor="yellow";
                // })
                

                // const element2 = document.getElementById("vegitables");
                // const children2 = element2.children;

                // Array.from(children2).forEach(child2 =>{
                //         child2.style.backgroundColor="lightgreen";
                // })
                

                // const element3 = document.getElementById("deserts");
                // const children3 = element3.children;
                
                // Array.from(children3).forEach(child3 =>{
                //         child3.style.backgroundColor="RED";
                // })

//-------------------------------------------------------------------------------------------------------
//--------------------ADD & CHANGE HTML -DOM ------------------------------------------------------------

//--------------------EXAMPLE 1 ----------------------------------------

//STEP1 - CREATE  THE ELEMENT
                // const newH1 = document.createElement("h1");

//STEP2 - ADD ATTRIBUTES/PROPERTIES
                // newH1.textContent ="i like pizza";
                // newH1.id="myH1";

                // newH1.style.color="tomato";
                // newH1.style.textAlign="center";

//STEP3 - APPEND ELEMENT TO DOM
                //document.body.append(newH1);
                //document.body.prepend(newH1);
                // document.getElementById('box1').append(newH1); 
                // document.getElementById('box2');
                // document.body.insertBefore(newH1,box2);

                // const boxes = document.querySelectorAll(".box");
                // document.body.insertBefore(newH1,boxes[4]);



// step4 REMOVE HTML ELEMENT

                // document.getElementById("box1").removeChild(newH1);

 
 //--------------------EXAMPLE 2 ----------------------------------------

// //STEP1 - CREATE  THE ELEMENT
//                  const newLi = document.createElement("li");

//STEP2 - ADD ATTRIBUTES/PROPERTIES
                // newLi.textContent ="coconut";
                //  newLi.id="coconut";
                //  newLi.style.fontWeight="bold";
                //  newLi.style.backgroundColor="lightgreen";
                // newLi.style.textAlign="center";

//STEP3 - APPEND ELEMENT TO DOM
                //document.body.append(newLi);
                //document.body.prepend(newLi);
                // document.getElementById('fruits').prepend(newLi); 
                // document.getElementById('apple');
                // document.body.insertBefore(newLi,orange);

                // const fruits = document.querySelectorAll("#fruits");
                // document.body.insertBefore(newLi,fruits[4]);



// step4 REMOVE HTML ELEMENT

                // document.getElementById("orange").removeChild(newLi);

//--------------------------------------------------------------------------------------------------------------------------------------------

//HIDE - SHOW IMAGE

                // const myBtn = document.getElementById("myBtn");
                // const myImg = document.getElementById("myImg");

                // myBtn.addEventListener("click",event=>{
                //         if(myImg.style.display === "none"){
                //         myImg.style.display="block";
                //         myBtn.textContent ="Hide"
                //         }else{
                //         myImg.style.display="none";
                //         myBtn.textContent ="show"
                //         }
                
                // })

//-----------------------------------------------------------------------------------------------------------------------------------------

// NODELIST - Static collections of HTML element by(id, class , elelment )
//            Can be created by using querySelectorAll()
//            similer  to an array , but no(map , filter , reduce)
//            NODELIST wont update to automatically reflect changes 

let buttons  = document.querySelectorAll(".myButton");

///ADD HTML/CSS PROPERTIES

                // buttons.forEach(button =>{
                // button.style.backgroundColor ="green";
                // button.textContent += "😉"
                // })

/// CLICK EVENT LISTENER
                // buttons.forEach(button =>{
                // button.addEventListener("click",event=>{
                //         event.target.style.backgroundColor ="tomato";
                // });
               
                // });


/// MOUSEOVER + MOUSEOUT  event listener

                // buttons.forEach(button =>{
                //         button.addEventListener("mouseover",event=>{
                //                 event.target.style.backgroundColor ="hsl(205, 100%, 50%)";
                //         });
                
                //         });
                // buttons.forEach(button =>{
                //         button.addEventListener("mouseout",event=>{
                //                 event.target.style.backgroundColor =" hsl(205, 100%, 60%)";
                //         });
                        
                //         });
//ADD AN ELEMENT

                // const newButton = document.createElement("button");  //STEP 1

                // newButton.textContent ="Button 5"; //STEP 2
                // newButton.classList = "myButton";

                // document.body.appendChild(newButton); //STEP 3


                // buttons = document.querySelectorAll(".myButton");

//REMOVE AN ELEMENT

                // buttons.forEach(button =>{
                //         button.addEventListener("click", event =>{
                //                 event.target.remove();
                //                 buttons = document.querySelectorAll(".myBottons");
                                

                //         });
                // });

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CLASSLIST - element property in javascript used to interact 
//             WITH  an element's list of classes (CSS classes)
//             Allows you To make reusable classes for many elements
//             across your webpage

// add()
// remove()
// taggle(Remove if present , Add if Not )
// replace(oldClass, newClass)
// contain()

                // const Mybtn = document.getElementById('Mybtn');

                // Mybtn.classList.add("enabled");

                // //Mybtn.classList.remove("enabled");

                // Mybtn.classList.add("hover");

                // Mybtn.classList.remove("hover");

                // Mybtn.addEventListener("mouseover",event=>{
                //         Mybtn.classList.add("hover");
                // });

                // Mybtn.addEventListener("mouseout",event=>{
                //         Mybtn.classList.remove("hover");
                // });




                // Mybtn.addEventListener("click",event=>{
                // if(event.target.classList.contains("disable")){
                //         event.target.textContent +="😡"
                // }else{
                //         event.target.classList.replace("enabled","disable");
                // }

                        
                // });
                //  buttons.forEach(button =>{
                //      button.addEventListener("mouseover",event=>{
                //          event.target.classList.toggle("hover") ;
                //         })
                                
                // });
                // buttons.forEach(button =>{
                //         button.addEventListener("mouseout",event=>{
                //             event.target.classList.toggle("hover") ;
                //            })
                                   
                //    });
//-----------------------------------------------------------------------------------------------------------------------------------
 //CALBACK  HELL =  situation in javascript wher callabacks
//                    are Nested within other callabacks to the
//                    degree where the end is dificult to read.
//                    old pattern to handle asynchronous function
//                    use precius  * async/await t avoide callback hell
   
                        // function task1(callback){
                        //         setTimeout(()=>{
                        //                 console.log("task 1 complete");
                        //                 callback();
                        //         },1000)
                        // }
                        // function task2(callback){
                        //         setTimeout(()=>{
                        //                 console.log("task 2 complete");
                        //                 callback();
                        //         },2000)
                        // }

                        // function task3(callback){
                        //         setTimeout(()=>{
                        //                 console.log("task 3 complete");
                        //                 callback();
                        //         },1500)
                        // }
                        // function task4(callback){
                        //         setTimeout(()=>{
                        //                 console.log("task 4 complete");
                        //                 callback();
                        //         },3000)
                        // }

                        // task1(()=>{
                        //         task2(()=>{
                        //                 task3(()=>{
                        //                         task4(()=> console.log("All task Completed"))
                                
                                
                        //                 })
                                
                        //         })

                        // })

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// PROMISE = an Object that manage asynchronous operations.
//           wrap a promises object arounf (asynchronous code)
//           "I PROMISE TO RETURN A VALUE "
//           pending  -> resolve or rejected
//           new Promise((resolve,reject)=>{asynchronous code})

//DO THESE CHORES IN ORDER

//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

                // function walkDog(){
                        
                //         return new Promise((resolve,reject)=>{
                //                 setTimeout(()=>{

                //                         const dogWalked = true;

                //                         if(dogWalked){
                //                                 resolve("You walk the dog");
                //                         }else{
                //                                 reject("you Didn't walk the dog")
                //                         }
                                
                                        
                //                 },1500);
                        
                //         })
                // }
                // function cleankitchen(){

                //         return new Promise((resolve,reject)=>{
                //         setTimeout(() => {
                //                 const kitchenCleaned  = false;

                //                         if(kitchenCleaned){
                //                                 resolve("You clean the kitchen  ");
                //                         }else{
                //                                 reject("you Didn't clean the kitchen")
                //                         }
                                
                        
                //         }, 2500);
                // })
                // }
                // function takeOuttrash(){
                //         return new Promise((resolve,reject)=>{
                //         setTimeout(() => {
                //                 const takeOuttrashed  = true;

                //                         if(takeOuttrashed){
                //                                 resolve("You take the trash   ")
                //                         }else{
                //                                 reject("you Didn't take the trash")
                //                         }
                                
                                
                //         }, 2500);
                // })
                // }
                // walkDog().then(value => {console.log(value); return cleankitchen()})
                //         .then(value => {console.log(value); return takeOuttrash()})
                //         .then(value => {console.log(value); console.log("Finished All Work")})
                //         .catch(error=>console.error(error));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// async /await  = Async  = makes a function return a promises
//                 await   = makes an async function  wait for a promises

//                 Allows you asynchronous code in a SYNCHRONOUS manner
//                 Async doesn't  have resolve or reject parameter
//                 Everything  after await is placed in an event queue


                        // function walkDog(){
                                                
                        //                         return new Promise((resolve,reject)=>{
                        //                                 setTimeout(()=>{

                        //                                         const dogWalked = true;

                        //                                         if(dogWalked){
                        //                                                 resolve("You walk the dog");
                        //                                         }else{
                        //                                                 reject("you Didn't walk the dog")
                        //                                         }
                                                        
                                                                
                        //                                 },1500);
                                                
                        //                         })
                        //                 }
                        // function cleankitchen(){

                        //                         return new Promise((resolve,reject)=>{
                        //                         setTimeout(() => {
                        //                                 const kitchenCleaned  = false;

                        //                                         if(kitchenCleaned){
                        //                                                 resolve("You clean the kitchen  ");
                        //                                         }else{
                        //                                                 reject("you Didn't clean the kitchen")
                        //                                         }
                                                        
                                                
                        //                         }, 2500);
                        //                 })
                        //                 }
                        // function takeOuttrash(){



                        //                         return new Promise((resolve,reject)=>{
                        //                         setTimeout(() => {
                        //                                 const takeOuttrashed  = true;

                        //                                         if(takeOuttrashed){
                        //                                                 resolve("You take the trash   ")
                        //                                         }else{
                        //                                                 reject("you Didn't take the trash")
                        //                                         }
                                                        
                                                        
                        //                         }, 2500);
                        //                 })
                        //                 }



                                
                        
                        // async function dochores() {

                        //         try {
                        //         const walkDogResult  = await walkDog();
                        //         console.log(walkDogResult);

                        //         const cleankitchenResult  = await cleankitchen();
                        //         console.log(cleankitchenResult);

                        //         const takeOuttrashResult  = await takeOuttrash();
                        //         console.log(takeOuttrashResult);

                        //         console.log("You Finish The works..")
                        //         } catch (error) {
                        //                 console.error(error);
                                        
                        //         }
                                
                        // }
                        // dochores();
//---------------------------------------------------------------------------------------------------------------------------------------------------

// JSON -  (Javascript object Notation) data-interchange format
//         used for exchange data between a server and a web application
//         JSON files{key:value} OR [value1, value2 , value3]

//         JSON.stringify() = converts a js objects to a string
//         JSON. parse() = converts a json string to a JS object

                        // const jsonnames = ["John","abrahm","ali","nadi"];

                        // const jsonperson = {
                        //         "name":"John",
                        //         "Age":30,
                        //         "isEmployed":true
                        
                        // }
                        // const jsonpeople = [{

                        //         "name":"John",
                        //         "Age":30,
                        //         "isEmployed":true
                        
                        // },
                        // {
                        //         "name":"abrahm",
                        //         "Age":62,
                        //         "isEmployed":false
                                
                        // },
                        // {
                        //         "name":"ali",
                        //         "Age":45,
                        //         "isEmployed":true
                        
                        // },
                        // {
                        //         "name":"nadi",
                        //         "Age":18,
                        //         "isEmployed":false
                        
                        // }]

                        // //     const jsonString = JSON.stringify(people);
                        // //     console.log(jsonString)

                        // const parseData = JSON.parse(jsonperson);
                        // console.log(jsonpeople);

                // fetch("people.json")
                // .then(response => response.json())
                // .then(values => value.forEach(value  => console.log(value.isEmployed)));

//-------------------------------------------------------------------------------------------------------------------------------------------
