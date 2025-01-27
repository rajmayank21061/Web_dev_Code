//readonly => prevents arrays from being changed.
const teammates:readonly string[] = ["hari","bhumi"];

//named tuple
const both:[p:number, q:number] = [43,64];

//destructing the tuples
const pair:[number,string] = [23,'beardo'];
const [x,y] = pair;



interface udd {
    username:string;
    password:number;
    location:string;
    login(username:string,password:number):void; //fn decleration
}

const employee:udd = {
    username:'Nishan',
    password:4235,
    location:"Nepal",
    login(username,password){ //fn initialization
        console.log(username,password);
    }
}

//index signatures

const variableSet: { [index:string]:number } = {};
variableSet.marks = 43;
variableSet.marks = 50;
 console.log(variableSet);
 

 //A enum is a special class that represented a group of constants.(enum are in numeric and string)
 enum set {
    left,
    right,
    top,
    bottom
 }
 console.log(set.right); //1

 //you can set the value of first numeric eunum and have it auto increament from that:
 enum collection{
    left = 501, //and you can initialize all values rathar than first value.
    right,
    top,
    bottom
 }
 console.log(collection.right) //502


// the `?` operator here marks parameter `c` as optional
function add (a:number,b:number,c?:number){
    return a + b + (c || 0);
}