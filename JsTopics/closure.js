
// function callapi(method){
//     return function (url){
//         console.log(`This is a url ${url} and this is a method ${method}. `);
//     }
// }

// const url = 'http://google.com/api'

// callapi('GET')(url);


// function count_concize(){
//     let count = 0;
//     return () => {
//         count++;
//         console.log(count);
//     }
// }

// const update_count = count_concize();
// update_count();
// update_count();

function CartCounter(){
    let _count = 0;
    function updateCount(val){
        _count += val;
    }

    return {
        increament(){
            updateCount(1);
        },
        decreament(){
            updateCount(-1);
        },
        Value(){
            return _count;
        }
    }
}

const findValue = CartCounter();
findValue.increament();
findValue.decreament();
findValue.decreament();
console.log( findValue.Value() );

//useState in react

function useState(initial){
    let _state = initial;

    function set_state(val){
        _state = val;
    }
    function get_state(){
        return _state;
    }

    return [get_state,set_state];
}

function counter(){
   const [count,setCount] = useState(5);

   return {
    click(){
        setCount(9);
    },
    render(){
    console.log("value now :", count());
   }
}
}

const Counter = counter();

//Counter.click();
Counter.render();