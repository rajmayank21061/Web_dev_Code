function square(a){
    return a*a;
}

function memoize(fn){
   let cache = {};  // more than 1 = JSON.stringify(); 
   return function(...args){
    let n = args[0];
    if( n in cache){
        return cache[n];
    }else{
        let result = fn(n); // fn.apply(this,args);
        cache[n] = result;
        return result;
    }
   }
}

console.time();

const ans1 = memoize(square);
console.log( ans1(4));

console.timeEnd();


console.time();

const ans2 = memoize(square);
console.log( ans2(4));

console.timeEnd();