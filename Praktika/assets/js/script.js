"use strict";

// let surname = "test";

// alert(surname);

// let person =prompt("Pls enter your name","Harry Poter")

// alert(person);

// if(person=="")
// {
//     console.log("Invalid");
// }else{
//     console.log(person);
// }

// let elem = confirm("Press a button");

// console.log(elem);

let stu1 = {
  id: 1,
  name: "Semed",
  surname: "Huseynov",
  age: 27,
};

let stu2 = {
  id: 2,
  name: "Besir",
  surname: "Temirli",
  age: 27,
};

let stu3 = {
  id: 3,
  name: "Tunzale",
  surname: "Memmedova",
  age: 27,
};

let stu4 = {
  id: 4,
  name: "Ilham",
  surname: "Lokbatanli",
  age: 29,
};

// for (let i = 0; i < students.length; i++)
// {
//     let result = students[i].name+" "+students[i].surname+" "+students[i].age;
//     console.log(result)
// }

// let sumAge=0;

// for(let i=0;i<students.length;i++)
// {
//     sumAge+=students[i].age;
// }

// let averageAges=sumAge/students.length;

// if(averageAges<50){
//     console.log("Young");
// }else{
//     console.log("Old");
// }
// console.log(averageAges);

// const elems = [1,2,3,4,5,6];

// for (const item of elems)
// {
//     console.log(item)
// }

// for (const item of students)
// {
//     console.log(item.name);
// }

// const product ={
//     name:"Samsung",
//     price:500
// }

// for (const key in product) {
//     // bu ancaq keyleri gosderir
//     // console.log(key);
//     // objectin icindekileri gosderir
//     // console.log(product[key]);
//     //her ikisin gosderir
//     //console.log(key+ "-" + product[key]);
// }

// for (const stu of students)
// {
//     for (const key in stu)
//     {
//         if(key=="name"){
//             let objectData=`${key}-${stu[key]}`
//             console.log(objectData);
//         }
//     }
// }

// function showText() {
//   //   console.log("text")
//   let isActive = true;
//   if (isActive) {
//     return;
//   }
//   return "text";
// }

// //showText();

// console.log(showText());

// function showName(text) {
//   console.log(text);
// }

// showName("Semed");

// let name = prompt("Add your name");

// function showName(text) {
//   console.log(text);
// }

// showName(name);

// function showName(name, surname, address) {
//   const result = `${name}${surname}${address}`;
//   console.log(result);
// }

// showName("Semed", "Huseynov", "Ehmedli");

// function sum(num = 100) {
//   console.log(num + 100);
// }

// sum(1);

// const students = [stu1, stu2, stu3, stu4];

// function getStudentsByAge(students) {
//   let countByAge = 0;
//   for (const stu of students) {
//     if (stu.age > 20) {
//       countByAge++;
//     }
//   }

//   countByAge **= 2;
//   console.log(countByAge);
// }

// getStudentsByAge(students);

// let a = 5;
// a = 100;
// let b = a;
// console.log(b);

let elems1 = [1, 2, 3, 4, 5];

let elems2 = elems1;

elems2[2] = 200;

console.log(elems1[2]);
