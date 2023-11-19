// Array
const heroes: string[] = [];
const myHeros: Array<number> =[1,4,8,0,56] 

type User={
    name: string,
    age: number
}

//
// declare array  1.
const you: User={
    name: "Leon",
    age: 24
}

// declare array  2. 
const me: User[]=[]
me.push({name: "Big", age:26}, {name: "Leon", age:20})

// 
myHeros.push(4)
console.log(you)