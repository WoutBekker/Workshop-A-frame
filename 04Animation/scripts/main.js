


var rotationSpeed = 10;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.z += rotationSpeed;
console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps
