/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    
    const queue = []
    function search (root, level) {
        if (root) {
            if (queue.length < level) queue.push([])
            let temp = queue[level-1]
            temp.push(root.val)
            search(root.left, level+1)
            search(root.right, level+1)
        } else return
    }
    
    search(root, 1)
    return queue
}

