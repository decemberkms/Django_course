var carInfo = {make:"Toyota", year:1990, model:"Camry"}


for (key in carInfo){
  console.log(key);
  console.log(carInfo[key]);
}


var simple = {
  prop: "Hello",
  myMethod: function(){
    console.log("The myMethod was called");
  }
}


var myObj = {
  name: "Min",
  greet: function(){
    console.log("Hello" + this.name);
  }
}
