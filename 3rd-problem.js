
const num = 10;


    function createCounter(n){
        return function(){
            return n++ 
        }
    }


    const counter = createCounter(num)

    console.log(counter())
    console.log(counter())
    console.log(counter())

