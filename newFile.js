function Student(name, number) {
  this.name = name;
  this.number = number;
}
let list = ['유승민', '소사무엘'];
let phoneNumber = ['010-2343-3618', '010-1234-3618'];
let studentArray = [];

for (let i = 0; i < list.length; i++) {
  studentArray[i] = new Student(list[i], phoneNumber[i]);
}
console.log(studentArray);
