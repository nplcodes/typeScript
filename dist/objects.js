"use strict";
const student = {
    name: "leon",
    stId: 2332,
    email: "leon@gmail.com"
};
function creatStudent(userData) {
    return userData;
}
console.log(creatStudent(student));
function createCourse() {
    return { name: "reactjs", price: 399 };
}
console.log(createCourse());
