// Objects
// 1.
const student:{name: string, stId: number, email: string} = {
    name: "leon",
    stId: 2332,
    email: "leon@gmail.com"
}
// 2.
function creatStudent(userData: {}): {} {
    return userData
}

console.log(creatStudent(student));

// 3.
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// 4.
type Users = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: Users): Users{
    return {name: "", email: "", isActive: true}
}