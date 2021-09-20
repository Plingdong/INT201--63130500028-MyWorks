function something(a, b, func) {
    return func(a, b);
}

function add(x, y) {
    return x + y
}
let sum = something(1, 2, add)

console.log(sum);


// callback function 
// การซ้อนฟังชั่น