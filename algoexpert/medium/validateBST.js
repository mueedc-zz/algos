// O(n) time | O(d) space, where d is the depth of the tree
function validateBst(tree) {
	return helper(tree, -Infinity, Infinity)
}

function helper(tree, minVal, maxVal) {
	if (tree === null) return true
	if (tree.value >= maxVal || tree.value < minVal) return false
	return helper(tree.left, minVal, tree.value) && helper(tree.right, tree.value, maxVal)
}
