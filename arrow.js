// function outerOne(a) {
//   function innerOne(b) {
//     console.log(b);
//   }
//   innerOne(a);
// }

function outerOne(a) {
  const innerOne = (b) => console.log(b);
  innerOne(a);
}

console.log(outerOne('hello'));

fs.readFile('./html', data, (error) => {});
