"use strict";
const personal = {
    name: "Go home",
    age: 33,
    date: "12.06.2023",
    win: "yes",
    getInfo(name) {
        return name;
    },
};
const acaYear = {
    name: "Back scholl",
    age: 33,
    date: "12.06.2023",
    win: "yes",
    getInfo(name) {
        return name;
    },
    academicYear: "2023"
};
console.log(personal.getInfo("Pizzo"));
