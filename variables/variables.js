console.log("variables");
var old = "old var";
let newStyle = "new let";

if (true == true) {
  var old = "try to change";
  let newStyle = "try to redifine let";
}

console.log(newStyle);
