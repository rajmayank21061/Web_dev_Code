
const user = {
    fname: 'raj',
    lname: 'me',
    getFullName(one,two){
        return `${one},${two} ! ${this.fname} ${this.lname}`;
    }
}

const user2 = {
    fname: 'Baby',
    lname: 'John'
}
//for bind
const get1 = user.getFullName.bind(user2,'Hi','Baby');
console.log(get1());

//for Call
const get2 = user.getFullName.call(user2,'Hi',"Baby ");
console.log(get2);

//for apply
const get3 = user.getFullName.apply(user2,['Hi',"Baby "]);
console.log(get3);

//bind could not used directly in console It's used by a variable But you would use directly call & apply.

//Function Currying

function multiply(a,b){
    return a * b;
}

const doubleMulty = multiply.bind(null,2);

console.log(doubleMulty(5));

//where 2 is a and b is 5 ;
