/*
 These are ALL falsy (behave like false in conditions)

false
0
""          // empty string
null
undefined
NaN

// EVERYTHING else is truthy, including:
"0"         // non-empty string — TRUTHY!
[]          // empty array — TRUTHY!
{}          // empty object — TRUTHY!
-1          // any non-zero number — TRUTHY!
*/

// Example 1:
if(0){
    console.log("0 is truthy");
}else{
    console.log("0 is falsy");
}

// Example 2:
if("0"){
    console.log('"0" is truthy');
}else{
    console.log('"0" is falsy');
}

// Example 3:
let arr = [];
if(arr){
    console.log("[] is truthy");
}else{
    console.log("[] is falsy");
}