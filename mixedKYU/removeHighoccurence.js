function removeHighestOccurrence(array)
{
    var acc={};
    array.forEach(element => {
        acc[element]=(acc[element]||0)+1;
    });
    console.log(acc);
    var large=Object.keys(acc)[0];
    var element=acc[large];
    for(let key in acc){
        if(acc[key]>acc[large]){
        large=key;
        element=acc[key]; 
        }
    }
    console.log("large",large,"  element",element);
    let arr=[];
    array.forEach(element => {
        if(element==large)
        {

        }
        else
        {
            arr.push(element);
        }
    });
    return arr;
}
console.log(removeHighestOccurrence([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]

console.log(removeHighestOccurrence(['a', 'b', 'b', 'c', 'c', 'c', 'd'])); // ['a', 'b', 'b', 'd']

console.log(removeHighestOccurrence([true, true, false, false, true])); // [false, false]