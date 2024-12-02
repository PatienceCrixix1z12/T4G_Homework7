let name = prompt("What is your name?");
let age = prompt("How old are you?");
let email = prompt("Write your email");


if(age < 12) {
    alert(`Hi ${name},you are ${age} years old and you are too young to register. Sorry😔😔`);
} else if(12 < age < 18) {
    alert(`Hi ${name},you are ${age} years old and you have limited options to register for. We will keep in
        thouch via your mail: ${email}`);
} else if (age > 18){
    alert(`Hi ${name}, you are ${age} years old and you can register for any option of 
        your choosing. We will  keep in touch via your ${Email}`);
} else {
    alert("Please enter a valid age");
}
