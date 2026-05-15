let arr = [10, 20, 5, 9, 4, 11, 15, 8, 9, 3]

console.log(arr.slice(1, 4))    // from index 1 to 3 (4 is exclusive)
// complexity: O(k) where k is the number of elements in the slice

console.log(arr.slice(5))       // from index 5 to the end
// complexity: O(n - k) where n is the total number of elements and k is the starting index

console.log(arr.slice(-2))      // last 2 elements
// complexity: O(k) where k is the number of elements in the slice

console.log(arr.slice(-4, -1))  // from the 4th last to the 2nd last (last is exclusive)
// complexity: O(k) where k is the number of elements in the slice