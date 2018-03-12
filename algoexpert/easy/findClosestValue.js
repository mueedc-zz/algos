// best case O(n log(n)) time | O(1) space
// worse case O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
  return helper(tree, target, Infinity)
}

function helper (tree, target, closest) {
	let current = tree
	while (current !== null) {
		if (Math.abs(target - closest) > Math.abs(current.value - target)) closest = current.value
		if (target > current.value) current = current.right
		else if (target < current.value) current = current.left
		else break
	}
	return closest
}
