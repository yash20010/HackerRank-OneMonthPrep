// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example

// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

// Constraints

// , where ()

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here
  let count = 0
  //   for (let i = 0; i < s.length; i++) {
  //     if (s.slice(i, i + m).reduce((a, b) => a + b, 0) === d) {
  //       count++
  //     }
  //   }
  let sum = s.slice(0, m).reduce((a, b) => a + b, 0)
  if (sum === d) {
    count++
  }
  for (let i = m; i < s.length; i++) {
    sum += s[i] - s[i - m]
    if (sum === d) {
      count++
    }
  }
  return count
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))
console.log(birthday([1, 2, 1, 3, 2], 3, 2))
