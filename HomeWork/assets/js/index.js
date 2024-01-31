//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

function numDivision(number) {
  if (number % 3 == 0 && number % 7 == 0) {
    console.log("Bolunur");
  } else {
    console.log("Bolunmur");
  }
}
//numDivision(21);

//2)Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

function numFactorial(number) {
  let facto = 1;
  for (let i = 1; i <= number; i++) {
    facto *= i;
  }
  console.log(facto);
}
//numFactorial(5);

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

let numbers = [1, 2, 3, 4, 5, 6];

function sumNumber(numbers) {
  let sum = 0;
  for (const item of numbers) {
    if (item % 2 == 0) {
      sum += item ** 2;
    }
  }
  console.log(sum);
}

sumNumber(numbers);

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

function checkMail(email, password) {
  if (email == "cavid@code.edu.az" && password == "12345") {
    console.log("Elasiz Cavid bey");
  } else {
    console.log("Ayee agzuuaa geleni yazma");
  }
}

let mail = "cavid@code.edu.az";

let password = "12345";

//checkMail(mail, password);

//5)Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

let nums = [1, 2, 3, 4, 5, 6];

function oddNumber(nums) {
  let sumOdd = 0;
  for (const item of nums) {
    if (item % 2 == 1) {
      sumOdd += item;
    }
  }

  console.log(sumOdd);
}

//oddNumber(nums);

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

function evenNumber(nums) {
  let countEven = 0;
  for (const item of nums) {
    if (item % 2 == 1) {
      countEven++;
    }
  }

  console.log(countEven);
}

//evenNumber(nums);
