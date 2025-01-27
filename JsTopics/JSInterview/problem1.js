//let and var

for(let i = 0; i<5; i++){

    setTimeout( () => {
        console.log(i);
    },1000)
}

// for(var j = 0; j<5; j++){

//     setTimeout( () => {
//         console.log(j);
//     },1000)
// }
for(var j = 0; j<5; j++){
    ( function(j){
    setTimeout( () => {
        console.log(j);
    },1000)
})(j)
}