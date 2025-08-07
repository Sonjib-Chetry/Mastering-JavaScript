

function frankenSplice(array1, array2, index) {
    
    let secondArray = array2.slice(0)

    let result = [];

    result = secondArray.splice(0, index) ;
    result.push(...array1);
    result.push(...secondArray)
    
    return result
}

