    const array = [7, 5, 6, 3, 4, 5, 11, 2];
    const tar = 9;
    let i = 0;

    function final(arr, target){
        for ( i ; i < arr.length; i++) {
            for(let j =  i + 1; j < arr.length; j++ ){
                if(arr[i] + arr[j] === target){
                    return [i, j]
                }                    
            }

        }
    }

    const main = final(array, tar)
    console.log(main)