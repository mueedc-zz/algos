function sortKMessedArray(arr, k) {
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i]
    let j = i-1
    while (j >= 0 && arr[j] > x) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = x
  }
  return arr
}
