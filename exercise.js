var person;
window.onload = function () {
    person = {
        name : "Marianne",
        age : 24,
        occupation : "spy"
    };

}
function square() {
     var v = document.getElementById("textbox").value;
     var b = v * v;
     window.alert(b);
}
function add3(){
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    var c = parseInt(document.getElementById("third").value);
    var d = a + b + c;
    window.alert(d);
}

function pers(person){ 
    document.getElementById("name").innerHTML = person.name;
    document.getElementById("age").innerHTML = person.age;
    document.getElementById("occ").innerHTML = person.occupation;
}