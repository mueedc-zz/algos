/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let changes = []
    changes[0] = 0
    
    // changes[] means the anwser for different amount, so ret = changes[amount]
    while (changes.length <= amount){
        let min = Infinity
        for (let i = 0; i < coins.length; i++) {
            if (changes.length - coins[i] < 0) continue
            min = Math.min(min, 1 + changes[changes.length - coins[i]])
        }
        changes.push(min)
    }
    
    return changes[amount] == Infinity ? -1 : changes[amount]
}

