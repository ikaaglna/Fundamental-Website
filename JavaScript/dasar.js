document.addEventListener("DOMContentLoaded", () => {
  const user = {
    firstName: "Siska",
    lastName: "Angelina",
    age: 19,
    isJedi: true,
    "home world": "Indonesia"
  };

  //output 1 akses var
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);

  //output 2 akses var
  console.log(`Saya berasal dari ${user["home world"]}`);

  //object
  const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };

  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  spaceship.class = "Light freighter";

  console.log(spaceship);
  delete spaceship.manufacturer; //delete
  console.log(spaceship);


  //array 
  let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
  console.log(myArray[1]);
  console.log("Panjang nilai myArray adalah " + myArray.length + ".");

  myArray.push('JavaScript'); //menambah data atau elemen terakhir dari array
  console.log(myArray);

  myArray.pop(); //mengeluarkan data atau elemen terakhir dari array
  console.log(myArray);


  myArray.shift(); //untuk mengeluarkan elemen pertama dari array
  myArray.unshift("Apple"); //untuk menambah elemen pertama dari array

  delete myArray[1];// hapus data array keberapa

  //Spread Operator
  const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
  console.log(favorites);
  console.log(...favorites); //menyebarkan nilai-nilai dalam array

  const obj1 = { firstName: 'Obi-Wan', age: 30 };
  const obj2 = { lastName: 'Kenobi', gender: 'M' };

  const newObj = { ...obj1, ...obj2 };
  console.log(newObj);


  //Destructuring Object & Array
  const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
  const { firstName, age, isMale = false } = profile;
  console.log(firstName)
  console.log(age)
  console.log(isMale)

  const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
  console.log(localFirstName);
  console.log(localLastName);
  console.log(localAge);

  //tukar variabel
  let a = 1;
  let b = 2;

  console.log("Sebelum swap");
  console.log("Nilai a: " + a);
  console.log("Nilai b: " + b);

  [a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

  console.log("Setelah swap");
  console.log("Nilai a: " + a);
  console.log("Nilai b: " + b);


  //map
  const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);

  console.log(myMap);

  // Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get().Lalu, untuk menambahkan pasangan key - value baru gunakan metode set().

  const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);

  console.log(capital.size); //3
  console.log(capital.get("London")); //England

  capital.set("New Delhi", "India"); //tambah
  console.log(capital.size); //4
  console.log(capital.get("New Delhi"));

  const oneTwoThree = [1, 2, 3];
  const sevenEightNine = [7, 8, 9];

  const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

  console.log(result);

});

/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 
  
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// Tulis kode di bawah ini


// function ready() {
  
// }

// document.addEventListener("DOMContentLoaded", ready);