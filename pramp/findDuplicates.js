// hashtable O(n + m) implementation (does not use the fact that the array is sorted)

function findDuplicates(arr1, arr2) {
  const map = {}
  const duplicates = []

  // create hashtable with smaller array to check against larger array
  for (let i = 0; i < arr.length; i++) {
    map[arr1[i]] = arr1[i]
  }

  // check for duplicates in second array
  for (let j = 0; j < arr2.length; j++) {
    if (map.hasOwnProperty(arr2[j])) duplicates.push(arr2[j])
  }

  return duplicates
}

// Alternate Solution
// // Optimized O(n * log(n)) solution using binary search since arrays are both sorted

// function findDuplicates(arr1, arr2) {
//   const duplicates = []
  
//   // implement binary search helper function on larger array for length of smaller array
//   for (let i = 0; i < arr1.length; i++) {
//     if (binarySearch(arr2, i) !== -1) duplicates.push(i) 
//   }
  
//   return duplicates
// }

// // standard binary search algorithm
// function binarySearch(arr, num) {
//   let begin = 0
//   let end = arr.length -1

//   while (begin <= end) {
//     let mid = begin + ((end-begin)/2)|0
//     if (arr[mid] < num) begin = mid + 1
//     else if (arr[mid] === num) return num
//     else end = mid - 1
//   }
//   return -1
// }
