nums = [10, 20, 15, 21, 30, 18]
nums1 = [10, 14, 16, 19]

function findGreaterThan20(num){
    return num > 20
}

result = nums.find(findGreaterThan20)   // find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
console.log(result)

result1 = nums1.find(findGreaterThan20)
console.log(result1)                    // undefined, because there is no element in nums1 that is greater than 20.


// for all the element greater tthan 20, we can use filter() method instead of find() method.
test = nums.filter(findGreaterThan20)  // filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(test)