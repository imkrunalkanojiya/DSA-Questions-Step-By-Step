# Square root of a number

## Problem Description

Given a number A. Return square root of the number if it is perfect square otherwise return -1.

Note : A number is a perfect square if its square root is an integer.

### Problem Constraints

1 <= A <= 10^8

### Input Format

First and the only argument is an integer A.

### Output Format

Return an integer which is the square root of A if A is perfect square otherwise return -1.

### Example Input

Input 1:
A = 4

Input 2:
A = 1001

### Example Output

Output 1:
2

Output 2:
-1

### Example Explanation

Explanation 1:
sqrt(4) = 2

Explanation 2:
1001 is not a perfect square.

## Solution

```javascript
module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    for (let i = 1; i <= A / i; i = i + 1) {
      if (i == A / i) {
        return i;
      }
    }
    return -1;
  },
};
```
