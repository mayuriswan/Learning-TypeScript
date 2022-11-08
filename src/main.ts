// let hello: string = "world";
// hello = "foo";
// const getFullName = (name: string, surname: string):string=>{
//     return name + " " + surname;
// };
// console.log(getFullName("ayoub", "elhaouss"));
interface User {
    name:string ; 
    age?: number;
    getMessage():string;
}
const user:User ={
    name:"ayoub",
    age:33,
    getMessage(){
        return "hello";
    }
}


const user2:User ={
    name:"Jack",
    getMessage(){
        return "hello";
    }

}
console.log(user.age);