let person = {}; //เป็น implicit class

console.log(typeof person);
person.id = 12345678; //id เป็น property
person.name = "dick";
console.log(person);
person.email = "asdda@gmail.com";
console.log(person);
delete person.email;
console.log(person);