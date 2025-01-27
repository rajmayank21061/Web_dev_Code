//1 => window
console.log(this);

//2 =>window object
function fn_this(){
    console.log(this)
}

//3 => user
const user = {
    fname: 'raj',
    lname: 'me',
    printFullName: function(){
        console.log(this);
    }
}

user.printFullName();

//4 => user
function user (fname,lname){
    console.log(this);
}
const coders = new user('raj','me');

//5 => window
const user = {
    fname: 'raj',
    lname: 'me',
    printFullName: function(){
        console.log(this);
    },
};

const printFullName = user.printFullName;
printFullName;

//situation 6 
const user = {
    name: 'raj me',
    printName: function(){
    console.log('upper',this);

    const printAgain = function(){
        console.log('lower',this);
    }
    printAgain();
    }
}

user.printName();

//if you use arrow function(there has not this itself) then arrowfn takes from outer enviroment this.