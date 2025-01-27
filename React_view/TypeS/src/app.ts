// let aa:number = 1;

// let bb = <number>2;

// function calculation(a:number,b:number){
//     return a+b;
// }
// console.log( cal(aa,bb))



// function sum(numbers:Array<number>){
//     return numbers.reduce((acc,item) => {
//         return acc+item;
//     },0);
// }

// console.log( sum([2,34,1]));



//custom type
//type ID = number|string;//union => |
//const userID:ID = "kfjg34";



// //type alias
// type User = {
//     name:string,
//     age:number,
//     post?:string //? => made optional
// }

// const user:User = {
//     name: 'Rakesh',
//     post: 'Judge',
//     age: 24
// }
// //fn return only User type
// function login(userData:User) :User {
//     return {
//         name:userData.name,
//         post:userData.post,
//         age:userData.age
//     }
// }

// console.log(login( {
//     name:"note",
//     post:'hunter',
//     age:43
// }))


/*
interface Transaction {
    payerAccNum: number;
    payeeAccNum: number;
};
interface BankAccount{
    accNumber: number;
    accHolder: string;
    balance: number;
    isActive: boolean;
    transection: Transaction[]
};

 const transection1:Transaction = {
    payerAccNum:4355,
    payeeAccNum:78123,
};
const transection2:Transaction = {
    payerAccNum:9875,
    payeeAccNum:32123,
};

const bankAcc : BankAccount = {
    accNumber:2234324,
    accHolder:'Una',
    balance:20200,
    isActive:true,
    transection:[transection1,transection2]
}; */

