document.addEventListener("DOMContentLoaded", () => {
  function greeting(name, language) {
    if (language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }

  greeting("Siska", "French");


  const sayName = function (name) {
    console.log(`Nama saya ${name}`)
  }

  //Arrow Function
  /*
  const sayName = name => {
    console.log(`Nama saya ${name}`)
  }
  */
  sayName("IKA");


  const sayName1 = name => console.log(`Nama saya ${name}`);
  sayName1("Leia");

  const sayHello = () => console.log("Selamat pagi semuanya!");
  sayHello();

});