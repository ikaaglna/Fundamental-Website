
document.addEventListener("DOMContentLoaded", () => {

  class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);

  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);


  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
      return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }

  const car = new Car('BMW', 'red', 200);
  console.log(car.chassisNumber);
  car.chassisNumber = 'BMW-1';
  console.log(car.chassisNumber);


  class Animal {
    constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }

  class Rabbit extends Animal {
    eat() {
      return `${this.name} sedang makan!`;
    }
  }

  class Eagle extends Animal {
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }

  const myRabbit = new Rabbit("Labi", 2, true);
  console.log(myRabbit);
  const myEagle = new Eagle("Elo", 4, false);
  console.log(myEagle);


  const hello = () => {
    console.log('Hello!')
  };

  const say = (someFunction) => {
    someFunction();
  }

  const sayHello = () => {
    return () => {
      console.log('Hello!');
    }
  }

  hello();
  say(hello);
  sayHello()();

  const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

  const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
      const item = arr[index];
      if (!item) return newArray;
      return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
  }


  const newNames = arrayMap(names, (name) => `${name}!`);

  console.log({
    names,
    newNames,
  });

  //callback
  const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });

  console.log(newArray);

  const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  console.log(eligibleForScholarshipStudents);

  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  console.log(totalScore);

  /**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

  const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];

  // Tulis kode di bawah ini
  const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);
  console.log(greatAuthors);

});