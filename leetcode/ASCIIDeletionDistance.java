class Solution {
    public int minimumDeleteSum(String str1, String str2) {
        int[][] dp = new int[str1.length() + 1][str2.length() + 1];

        for (int i = str1.length() - 1; i >= 0; i--) {
            dp[i][str2.length()] = dp[i+1][str2.length()] + str1.codePointAt(i);
        }
        for (int j = str2.length() - 1; j >= 0; j--) {
            dp[str1.length()][j] = dp[str1.length()][j+1] + str2.codePointAt(j);
        }
        for (int i = str1.length() - 1; i >= 0; i--) {
            for (int j = str2.length() - 1; j >= 0; j--) {
                if (str1.charAt(i) == str2.charAt(j)) {
                    dp[i][j] = dp[i+1][j+1];
                } else {
                    dp[i][j] = Math.min(dp[i+1][j] + str1.codePointAt(i),
                                        dp[i][j+1] + str2.codePointAt(j));
                }
            }
        }
        return dp[0][0];
    }
}
