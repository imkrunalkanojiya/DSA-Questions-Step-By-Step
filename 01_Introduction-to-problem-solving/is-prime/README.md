# isPrime

## Problem Description

Given a number A. Return 1 if A is prime and return 0 if not.

Note : The value of A can cross the range of Integer.

### Problem Constraints

1 <= A <= 10^9

### Input Format

The first argument is a single integer A.

### Output Format

Return 1 if A is prime else return 0.

### Example Input

Input 1:
A = 5

Input 2:
A = 10

### Example Output

Output 1:
1

Output 2:
0

### Example Explanation

Explanation 1:
5 is a prime number.

Explanation 2:
10 is not a prime number.

```javascript
module.exports = {
  //param A : long
  //return an integer
  solve: function (A) {
    let count = BigInt(0);
    for (let i = BigInt(1); i <= A / BigInt(i); i = i + BigInt(1)) {
      if (A % i == BigInt(0)) {
        if (i == A / BigInt(i)) {
          count = count + BigInt(1);
        } else {
          count = count + BigInt(2);
        }
      }
    }
    if (count == BigInt(2)) {
      return 1;
    } else {
      return 0;
    }
  },
};
```
