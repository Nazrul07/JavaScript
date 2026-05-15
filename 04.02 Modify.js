nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Modify the array by multiplying each element by 2
for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
}

console.log(nums); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

nums.slice(0, 2);  // This creates a new array with the first two elements of nums, but does not modify the original array
console.log(nums); // Same as it is. Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// But
nums = nums.slice(0, 5); // This reassigns nums to the new array created by slice, effectively modifying the original reference
console.log(nums); // Output: [2, 4, 6, 8, 10]
// Complexity: O(n) for the loop that modifies the array.


// Insert an element at different position in the array

nums.splice(2, 0, 12);      // This inserts the number 12 at index 2 without removing any elements
console.log(nums);          // Output: [2, 4, 12, 6, 8, 10]
// Complexity: O(n) for the splice operation.

nums.splice(2, 0, 100, 200)
console.log(nums);          // Output: [2, 4, 100, 200, 12, 6, 8, 10]
// Complexity: O(n) for the splice operation, as it may need to shift elements to accommodate the new ones.

nums.splice(3, 2, 199, 201) // This removes 2 elements starting from index 3 and inserts 199 and 201 at that position
console.log(nums);          // Output: [2, 4, 100, 199, 201, 6, 8, 10]
// Complexity: O(n) for the splice operation, as it may need to shift elements to accommodate the changes.

nums.splice(0, 3, 49, 55)   // This removes 3 elements starting from index 0 and inserts 49 and 55 at that position
console.log(nums);          // Output: [49, 55, 199, 201, 6, 8, 10]
// Complexity: O(n) for the splice operation, as it may need to shift elements to accommodate the changes.

console.log()
console.log(nums)           // Output: [49, 55, 199, 201, 6, 8, 10]
nums.splice(3, 2)           // Remove 2 elements starting from index 3
console.log(nums)           // Output: [49, 55, 199, 8, 10]