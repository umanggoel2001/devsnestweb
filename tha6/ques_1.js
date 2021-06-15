// ques 1)Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True
//ans***************************
const inp1 = 'w3resource';
const inp2 = [1, 2 , 4, 0];

function is_array(val) {
    return Array.isArray(val);
}

console.log(is_array(inp1));
console.log(is_array(inp2));

