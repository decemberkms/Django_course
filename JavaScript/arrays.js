alert("Hi!")

var a = [12,3,5,6]

console.log(a);

alert(a)


a.pop()

alert(a)

for (var i=0; i<a.length;i++){
  console.log(a[i]);
}

for (letter of a){
  console.log(letter);
}

a.forEach(alert)
