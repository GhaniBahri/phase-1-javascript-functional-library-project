function myEach(collection, callback){

    // if (typeof collection === "object"){
    //     // const test ={...collection}
    //     Object.assign({}, collection);
    //     const values = Object.values(test)
    //     const keys = Object.keys(test)
    //     for (let i=0; i<keys.length; i++){
    //         // console.log(test[keys[i]])
            
    //         callback(test[keys[i]])
    //     }
    // }
    // else {
    //     const test =[...collection]
    //     for (let i=0; i<collection.length; i++){
    //     // console.log(i)
    //     callback(test[i])
    // }}
    let values
    if (typeof collection === "object"){
         values = Object.values(collection)
    }
    else{
         values =[...collection]
    }
    
        for (let i=0; i<values.length; i++){
        // console.log(i)
        callback(values[i])}
    return collection
}
function myMap(collection, callback){
    let values
    if (typeof collection === "object"){
         values = Object.values(collection)
    }
    else{
         values =[...collection]
    }
    const res = []
    for (let i=0; i<values.length; i++){
        res.push(callback(values[i]))
    }
    return res
}

function myReduce(collection, callback, acc){
    let values
    if (typeof collection === "object"){
         values = Object.values(collection)
    }
    else{
         values =[...collection]
    }
    if (!acc){
        acc= values[0]
        for (let i=0; i<values.length-1; i++){
            acc =callback(acc,values[i+1], values.slice(i+1))
        }
    }
    else{
        for (let i=0; i<values.length; i++){
            acc= callback(acc,values[i], values.slice(i))
        }
    }
    return acc
}

function myFind(collection, predicate){
    let values
    if (typeof collection === "object"){
         values = Object.values(collection)
    }
    else{
         values =[...collection]
    }
    for (let i=0; i<values.length; i++){
        if (predicate(values[i])) return values[i]
        
    }
    return undefined
}

function myFilter(collection, predicate){
    let values
    if (typeof collection === "object"){
         values = Object.values(collection)
    }
    else{
         values =[...collection]
    }
    let arr=[]
    for (let i=0; i<values.length; i++){
        if (predicate(values[i])) arr.push(values[i])
        
    }
    return arr
}

function mySize(collection){
    let values
    if (typeof collection === "object"){
         values = Object.values(collection)
    }
    else{
         values =[...collection]
    }
    return values.length
}

function myFirst(array, n=1){
    const arr =[]
    for (let i=0; i<n; i++){
         arr.push(array[i])
    }
    return n ===1? arr[0]: arr

}

function myLast(array, n=0){
    const arr =[]
    for (let i= array.length - 1; i= array.length - n; i--){
         arr.unshift(array[i])
    }
    // console.log('last', array[-1])
    return n!==0? arr: array[array.length-1]
}



function test(item){console.log(item)}
function callback (acc, val, collection) { return acc + val; }
// myEach([1, 2, 3], test);
// myEach({one: 1, two: 2, three: 3}, test);
const testArr= [1, 2, 3]
const testObj= {one: 1, two: 2, three: 3}
// myMap(testArr, test)
console.log('acc', myReduce(testArr, callback, 10), 'suposed 16')
console.log('no acc',myReduce(testArr, callback), 'suposed 6')
// myReduce(testArr, callback, 10)