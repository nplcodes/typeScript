// Interface
interface concern {
    name: string,
    age: number,
    date?: string,
    getInfo(name:string): string,
    // getAge: ()=> number

}
// redefine interface
interface concern{
    win: string
}

const personal: concern={
    name: "Go home",
    age: 33,
    date: "12.06.2023",
    win: "yes",
    getInfo(name: "Leon") {
        return name;
    },
}

// extending interface

interface Academics extends concern{
    academicYear: string
}

const acaYear: Academics={
    name: "Back scholl",
    age: 33,
    date: "12.06.2023",
    win: "yes",
    getInfo(name: "Leon") {
        return name;
    },
    academicYear: "2023"
}



console.log(personal.getInfo("Pizzo"));